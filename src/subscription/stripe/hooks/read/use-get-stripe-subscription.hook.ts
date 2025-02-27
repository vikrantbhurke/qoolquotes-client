import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/global/states/store";
import { getStripeSubscription } from "../../stripe.network";
import { Subscription } from "@/subscription/enums";

export const useGetStripeSubscription = () => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const isSubscriptionStripe = auth?.subscription === Subscription.Stripe;
  const hasSubscriptionId = auth?.subscriptionId !== "none";

  const {
    data: stripeSubscription,
    isPending,
    isError,
    error,
    refetch: refetchStripeSubscription,
  } = useQuery({
    queryKey: ["getStripeSubscription", auth?.subscriptionId],
    queryFn: () =>
      getStripeSubscription({ subscriptionId: auth?.subscriptionId }),
    enabled: !!hasSubscriptionId && !!isSubscriptionStripe,
  });

  return {
    stripeSubscription,
    isPending,
    isError,
    error,
    refetchStripeSubscription,
  };
};
