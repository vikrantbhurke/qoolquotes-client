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
      <>
        <Stack gap={0} miw={350} align="center">
          <CustomSkeleton w="100%" bgcolor={threeDefaultBg} />
          <CustomSkeleton w="100%" bgcolor={threeDefaultBg} />
          <CustomSkeleton w="100%" bgcolor={threeDefaultBg} />
        </Stack>

        <PayPalSubscriptionLayout />
      </>
    );
  }

  const status = subscription.status;
  const startTime = subscription.start_time;
  const nextBillingTime = subscription.billing_info.next_billing_time;
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

      {(startTime || nextBillingTime) && (
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
                subscriptionUtility.getStatus(subscription.status)
              )}>
              {subscriptionUtility.getStatus(subscription.status)}
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
