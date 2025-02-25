import { subscriptionUtility } from "../subscription.utility";
import { PayPalSubscriptionLayout } from "../paypal/layouts";
import { Group, Stack, Text, Title } from "@mantine/core";
import { useGetSubscription } from "../paypal/hooks/read";
import { Status } from "../enums";
import { CustomSkeleton } from "@/global/components/reusables";
import { threeDefaultBg } from "@/global/styles/renamed.variables";

export const SubscriptionLayout = () => {
  const { subscription, isPending, isError } = useGetSubscription();

  const list = [
    `⭐ Remove all ads.`,
    `⭐ Remove playlist limit.`,
    `⭐ Apply custom colors & fonts to quotes.`,
  ];

  if (isPending || isError) {
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

  const date = new Date();
  const query = new URLSearchParams(window.location.search);
  const subscribedTrue = query.get("subscribed") === "true";
  const status = subscribedTrue ? "ACTIVE" : subscription?.status;

  const startTime = subscribedTrue
    ? date.toLocaleDateString("en-GB")
    : subscription?.start_time;

  const nextBillingTime = subscribedTrue
    ? date.setFullYear(date.getFullYear() + 1).toLocaleString("en-GB")
    : subscription?.billing_info?.next_billing_time;

  const isInactive = subscriptionUtility.getStatus(status) === Status.Inactive;

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
                subscriptionUtility.getStatus(subscription?.status)
              )}>
              {subscriptionUtility.getStatus(subscription?.status)}
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

      <PayPalSubscriptionLayout />
    </>
  );
};
