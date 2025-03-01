import { subscriptionUtility } from "../subscription.utility";
import { Group, Stack, Text, Title } from "@mantine/core";
import { Status, Subscription } from "../enums";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const SubscriptionLayout = ({
  paypalSubscription,
  stripeSubscription,
}: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  const list = [
    `⭐ Remove all advertisements.`,
    `⭐ Remove playlist count & size limit.`,
    `⭐ Apply custom colors & fonts to quotes.`,
  ];

  // Optimistically update the UI until PayPal or Stripe returns the updated subscription details
  const date = new Date();
  const dateIsoString = date.toISOString().split(".")[0] + "Z";
  const nextYearDate = date.setFullYear(date.getFullYear() + 1);
  const nextYearIsoString =
    new Date(nextYearDate).toISOString().split(".")[0] + "Z";

  const isPayPal = auth.subsciption === Subscription.PayPal;
  const isStripe = auth.subsciption === Subscription.Stripe;

  let status: Status = Status.Inactive;
  let behavior = null;
  let startTime;
  let nextBillingTime;
  let isActive = false;
  let isSuspended = false;
  let isInactive = true;

  if (paypalSubscription) {
    const { status: paypalStatus, start_time } = paypalSubscription;

    if (paypalStatus === "ACTIVE") status = Status.Active;
    if (paypalStatus === "SUSPENDED") status = Status.Suspended;
    if (paypalStatus === "CANCELLED") status = Status.Inactive;
    if (paypalStatus === "EXPIRED") status = Status.Inactive;

    isActive = status === Status.Active;
    isSuspended = status === Status.Suspended;
    isInactive = status === Status.Inactive;

    startTime = isPayPal ? dateIsoString : start_time;

    nextBillingTime = isPayPal
      ? nextYearIsoString
      : paypalSubscription.billing_info.next_billing_time;
  }

  if (stripeSubscription) {
    const { status: stripeStatus, pause_collection } = stripeSubscription;
    if (pause_collection) behavior = pause_collection;

    if (stripeStatus === "active" && !behavior) status = Status.Active;
    if (stripeStatus === "active" && behavior) status = Status.Suspended;
    if (stripeStatus === "canceled") status = Status.Inactive;
    if (stripeStatus === "incomplete") status = Status.Inactive;

    isActive = status === Status.Active;
    isSuspended = status === Status.Suspended;
    isInactive = status === Status.Inactive;

    startTime = isStripe
      ? dateIsoString
      : new Date(stripeSubscription.current_period_start * 1000).toISOString();

    nextBillingTime = isStripe
      ? nextYearIsoString
      : new Date(stripeSubscription.current_period_end * 1000).toISOString();
  }

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

            <Title order={6} c={subscriptionUtility.getStatusColor(status)}>
              {status}
            </Title>
          </Group>

          <Group gap="xs">
            <Title order={6} ta="center">
              Started On:{" "}
            </Title>

            <Text fz="sm">{subscriptionUtility.formatDateTime(startTime)}</Text>
          </Group>

          <Group gap="xs">
            <Title order={6} ta="center">
              Renews On:{" "}
            </Title>

            <Text fz="sm">
              {subscriptionUtility.formatDateTime(nextBillingTime)}
            </Text>
          </Group>
        </Stack>
      )}
    </>
  );
};
