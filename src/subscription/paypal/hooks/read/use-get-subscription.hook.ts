import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/global/states/store";
import { getSubscription } from "../../paypal.network";

export const useGetSubscription = () => {
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
  });

  return { subscription, isPending, isError, error, refetchSubscription };
};
