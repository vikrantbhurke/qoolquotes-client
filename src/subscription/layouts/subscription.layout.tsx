import { subscriptionUtility } from "../subscription.utility";
import { PayPalSubscriptionLayout } from "../paypal/layouts";
import { Stack, Text, Title } from "@mantine/core";
import { RootState } from "@/global/states/store";
import { useSelector } from "react-redux";
import { Status } from "../enums";

export const SubscriptionLayout = () => {
  const { subscription } = useSelector(
    (state: RootState) => state.subscription
  );

  const list = [
    `⭐ Remove all ads.`,
    `⭐ Remove playlist limit.`,
    `⭐ Apply custom colors and fonts to quotes.`,
  ];

  const status = subscription?.status;

  //   const isSuspended =
  //     subscriptionUtility.getStatus(status) === Status.Suspended;
  const isInactive = subscriptionUtility.getStatus(status) === Status.Inactive;
  //   const isActive = subscriptionUtility.getStatus(status) === Status.Active;
  const isCanceled = subscriptionUtility.getStatus(status) === Status.Canceled;
  const isExpired = subscriptionUtility.getStatus(status) === Status.Expired;

  return (
    <>
      {(isCanceled || isExpired || isInactive) && (
        <>
          <Stack gap="xs">
            <Title order={5} ta="center">
              Subscribe for just ${10} / year.
            </Title>

            {list.map((item, index) => (
              <Text size="sm" key={index}>
                {item}
              </Text>
            ))}
          </Stack>
        </>
      )}

      <PayPalSubscriptionLayout />
    </>
  );
};
