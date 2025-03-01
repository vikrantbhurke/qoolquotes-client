import { useQuery } from "@tanstack/react-query";
import { getStripeSubscriptionId } from "../../stripe.network";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { useEffect } from "react";
import { setAuth } from "@/user/auth.slice";
import { useDispatch } from "react-redux";

export const useGetStripeSubscriptionId = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.auth);
  const { sessionId } = useSelector((state: RootState) => state.subscription);

  const {
    data,
    error,
    isError,
    isPending,
    refetch: refetchStripeSubscriptionId,
  } = useQuery({
    queryKey: ["getStripeSubscriptionId", sessionId],
    queryFn: () => getStripeSubscriptionId({ sessionId }),
    enabled: !!sessionId,
  });

  useEffect(() => {
    if (data) {
      dispatch(
        setAuth({
          ...auth,
          subscriptionId: data.subscriptionId,
        })
      );
    }
  }, [data]);

  return {
    data,
    error,
    isError,
    isPending,
    refetchStripeSubscriptionId,
  };
};
