import { Stack } from "@mantine/core";
import { PayPalSubscriptionButtons } from "../paypal/layouts";
import { useGetPayPalSubscription } from "../paypal/hooks/read";
import { useGetStripeSubscription } from "@/subscription/stripe/hooks/read";
import { StripeSubscriptionButtons } from "@/subscription/stripe/layouts";
import { SubscriptionLayout } from "@/subscription/layouts";
import { CustomSkeleton } from "@/global/components/reusables";
import { threeDefaultBg } from "@/global/styles/renamed.variables";

export const GetSubscriptionItem = () => {
  const { paypalSubscription, isPending: isGetPayPalSubscriptionPending } =
    useGetPayPalSubscription();

  const { stripeSubscription, isPending: isGetStripeSubscriptionPending } =
    useGetStripeSubscription();

  if (!isGetPayPalSubscriptionPending && !isGetStripeSubscriptionPending) {
    return (
      <Stack>
        <Stack gap={0} align="center">
          <CustomSkeleton w="100%" bgcolor={threeDefaultBg} />
          <CustomSkeleton w="100%" bgcolor={threeDefaultBg} />
          <CustomSkeleton w="100%" bgcolor={threeDefaultBg} />
        </Stack>

        <CustomSkeleton w="100%" bgcolor={threeDefaultBg} h={60} />
      </Stack>
    );
  }

  return (
    <>
      <SubscriptionLayout
        paypalSubscription={paypalSubscription}
        stripeSubscription={stripeSubscription}
      />

      <Stack gap="xs">
        <PayPalSubscriptionButtons paypalSubscription={paypalSubscription} />
        <StripeSubscriptionButtons stripeSubscription={stripeSubscription} />
      </Stack>
    </>
  );
};
