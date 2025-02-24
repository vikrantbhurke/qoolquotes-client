import { subscriptionUtility } from "../subscription.utility";
import { PayPalSubscriptionLayout } from "../paypal/layouts";
import { Group, Stack, Text, Title } from "@mantine/core";
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
  const startTime = subscription?.start_time;
  const updatedTime = subscription?.status_update_time;
  const nextBillingTime = subscription?.billing_info?.next_billing_time;

  const isInactive = subscriptionUtility.getStatus(status) === Status.Inactive;
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

      {(startTime || updatedTime || nextBillingTime) && (
        <Stack gap={0}>
          <Group gap="xs">
            <Title order={6} ta="center">
              Subscription Status:{" "}
            </Title>

            <Title
              order={6}
              c={subscriptionUtility.getStatusColor(
                subscriptionUtility.getStatus(subscription?.status)
              )}>
              {subscriptionUtility.getStatus(subscription?.status)}
            </Title>
          </Group>

          {startTime && (
            <Group gap="xs">
              <Title order={6} ta="center">
                Subscription Started On:{" "}
              </Title>

              <Text fz="sm">
                {subscriptionUtility.formatDateTime(startTime)}
              </Text>
            </Group>
          )}

          {updatedTime && (
            <Group gap="xs">
              <Title order={6} ta="center">
                Subscription Updated On:{" "}
              </Title>

              <Text fz="sm">
                {subscriptionUtility.formatDateTime(updatedTime)}
              </Text>
            </Group>
          )}

          {nextBillingTime && (
            <Group gap="xs">
              <Title order={6} ta="center">
                Next Billing Time:{" "}
              </Title>

              <Text fz="sm">
                {subscriptionUtility.formatDateTime(nextBillingTime)}
              </Text>
            </Group>
          )}
        </Stack>
      )}

      <PayPalSubscriptionLayout />
    </>
  );
};
