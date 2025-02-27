import { subscriptionUtility } from "../subscription.utility";
import { Group, Stack, Text, Title } from "@mantine/core";
import { Status } from "../enums";
// import { useSelector } from "react-redux";
// import { RootState } from "@/global/states/store";

export const SubscriptionLayout = ({
  paypalSubscription,
  // stripeSubscription,
}: any) => {
  // const { auth } = useSelector((state: RootState) => state.auth);

  const list = [
    `⭐ Remove all advertisements.`,
    `⭐ Remove playlist count & size limit.`,
    `⭐ Apply custom colors & fonts to quotes.`,
  ];

  // Optimistically update the UI until PayPal returns the updated subscription details
  const date = new Date();
  const dateIsoString = date.toISOString().split(".")[0] + "Z";
  const nextYearDate = date.setFullYear(date.getFullYear() + 1);

  const nextYearIsoString =
    new Date(nextYearDate).toISOString().split(".")[0] + "Z";

  const query = new URLSearchParams(window.location.search);
  const subscribedTrue = query.get("subscribed") === "true";
  const status = subscribedTrue ? "ACTIVE" : paypalSubscription?.status;
  const startTime = subscribedTrue
    ? dateIsoString
    : paypalSubscription?.start_time;

  const nextBillingTime = subscribedTrue
    ? nextYearIsoString
    : paypalSubscription?.billing_info?.next_billing_time;

  const isInactive = subscriptionUtility.getStatus(status) === Status.Inactive;
  console.log("isInactive", isInactive);
  return (
    <>
      {isInactive && (
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
      )}

      {!isInactive && (
        <Stack gap={0}>
          <Title order={5} ta="center">
            Subscription Details
          </Title>

          <Group gap="xs">
            <Title order={6} ta="center">
              Status:{" "}
            </Title>

            <Title
              order={6}
              c={subscriptionUtility.getStatusColor(
                subscriptionUtility.getStatus(status)
              )}>
              {subscriptionUtility.getStatus(status)}
            </Title>
          </Group>

          {startTime && (
            <Group gap="xs">
              <Title order={6} ta="center">
                Started On:{" "}
              </Title>

              <Text fz="sm">
                {subscriptionUtility.formatDateTime(startTime)}
              </Text>
            </Group>
          )}

          {nextBillingTime && (
            <Group gap="xs">
              <Title order={6} ta="center">
                Renews On:{" "}
              </Title>

              <Text fz="sm">
                {subscriptionUtility.formatDateTime(nextBillingTime)}
              </Text>
            </Group>
          )}
        </Stack>
      )}
    </>
  );
};
