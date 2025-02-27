import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/global/states/store";
import { getPayPalSubscription } from "../../paypal.network";
import { Subscription } from "@/subscription/enums";

export const useGetPayPalSubscription = () => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const isSubscriptionPayPal = auth?.subscription === Subscription.PayPal;
  const hasSubscriptionId = auth?.subscriptionId !== "none";

  const {
    data: paypalSubscription,
    isPending,
    isError,
    error,
    refetch: refetchPayPalSubscription,
  } = useQuery({
    queryKey: ["getPayPalSubscription", auth?.subscriptionId],
    queryFn: () =>
      getPayPalSubscription({ subscriptionId: auth?.subscriptionId }),
    enabled: !!hasSubscriptionId && !!isSubscriptionPayPal,
  });

  return {
    paypalSubscription,
    isPending,
    isError,
    error,
    refetchPayPalSubscription,
  };
};
