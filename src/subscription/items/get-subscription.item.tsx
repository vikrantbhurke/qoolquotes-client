import { Stack } from "@mantine/core";
import { PayPalSubscriptionButtons } from "../paypal/layouts";
import { useGetPayPalSubscription } from "../paypal/hooks/read";
import { useGetStripeSubscription } from "@/subscription/stripe/hooks/read";
import { StripeSubscriptionButtons } from "@/subscription/stripe/layouts";
import { SubscriptionLayout } from "@/subscription/layouts";
// import { CustomSkeleton } from "@/global/components/reusables";
// import { threeDefaultBg } from "@/global/styles/renamed.variables";
// import { useSelector } from "react-redux";
// import { RootState } from "@/global/states/store";
// import { Subscription } from "../enums";

export const GetSubscriptionItem = () => {
  // const { auth } = useSelector((state: RootState) => state.auth);

  const {
    paypalSubscription,
    // isPending: isGetPayPalSubscriptionPending
  } = useGetPayPalSubscription();

  const {
    stripeSubscription,
    // isPending: isGetStripeSubscriptionPending
  } = useGetStripeSubscription();

  // if (!paypalSubscription && !paypalSubscription) {
  //   return (
  //     <Stack>
  //       <Stack gap={0} align="center">
  //         <CustomSkeleton w="100%" bgcolor={threeDefaultBg} />
  //         <CustomSkeleton w="100%" bgcolor={threeDefaultBg} />
  //         <CustomSkeleton w="100%" bgcolor={threeDefaultBg} />
  //       </Stack>

  //       <CustomSkeleton w="100%" bgcolor={threeDefaultBg} h={60} />
  //     </Stack>
  //   );
  // }

  return (
    <>
      <SubscriptionLayout
        paypalSubscription={paypalSubscription}
        stripeSubscription={stripeSubscription}
      />

      <Stack gap="xs">
        {/* {auth.subscription === Subscription.PayPal && ( */}
        <PayPalSubscriptionButtons paypalSubscription={paypalSubscription} />
        {/* )} */}

        {/* {auth.subscription === Subscription.Stripe && ( */}
        <StripeSubscriptionButtons stripeSubscription={stripeSubscription} />
        {/* )} */}
      </Stack>
    </>
  );
};
