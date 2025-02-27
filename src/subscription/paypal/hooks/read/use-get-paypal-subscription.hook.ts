import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/global/states/store";
import { getPayPalSubscription } from "../../paypal.network";
import { Subscription } from "@/subscription/enums";

export const useGetPayPalSubscription = () => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const isSubscriptionPayPal = auth?.subscription === Subscription.PayPal;

  const {
    data: paypalSubscription,
    isPending,
    isError,
    error,
    refetch: refetchPayPalSubscription,
  } = useQuery({
    queryKey: ["getPayPalSubscription", auth?.email],
    queryFn: () => getPayPalSubscription({ email: auth?.email }),
    enabled: !!auth?.email && !!isSubscriptionPayPal,
  });

  return {
    paypalSubscription,
    isPending,
    isError,
    error,
    refetchPayPalSubscription,
  };
};
