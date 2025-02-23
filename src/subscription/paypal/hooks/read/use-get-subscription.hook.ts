import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/global/states/store";
import { getSubscription } from "../../paypal.network";
import { useDispatch } from "react-redux";
import { setSubscription } from "@/user/auth.slice";
import { useEffect } from "react";

export const useGetSubscription = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.auth);

  const {
    data: subscription,
    isPending,
    isError,
    error,
    refetch: refetchSubscription,
  } = useQuery({
    queryKey: ["getSubscription", auth?.email],
    queryFn: () => getSubscription({ email: auth?.email }),
    enabled: !!auth?.email,
    gcTime: 0,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (subscription) dispatch(setSubscription(subscription));
  }, [subscription]);

  return { subscription, isPending, isError, error, refetchSubscription };
};
