import {
  useActivateSubscription,
  useCancelSubscription,
  useCreateSubscription,
  useSuspendSubscription,
} from "../hooks/create";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { SubscriptionStatus } from "@/subscription/enums";
import { Button, Stack, Text, Title } from "@mantine/core";
import { useGetSubscription } from "../hooks/read";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getUserByUsername } from "@/user/user.network";
import { useDispatch } from "react-redux";
import { setAuth } from "@/user/auth.slice";

export const PayPalSubscriptionLayout = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    const fetchAuth = async () => {
      const user = await queryClient.fetchQuery({
        queryKey: ["getUserByUsername", auth.username],
        queryFn: () => getUserByUsername(auth.username),
      });

      dispatch(setAuth(user));
    };

    if (query.get("subscribed") && auth.id) fetchAuth();
  }, []);

  const { createSubscriptionMutation, isPending: isCreateSubscriptionPending } =
    useCreateSubscription();

  const {
    suspendSubscriptionMutation,
    isPending: isSuspendSubscriptionPending,
  } = useSuspendSubscription();

  const {
    activateSubscriptionMutation,
    isPending: isActivateSubscriptionPending,
  } = useActivateSubscription();

  const { cancelSubscriptionMutation, isPending: isCancelSubscriptionPending } =
    useCancelSubscription();

  const handleCreateSubscription = () => {
    createSubscriptionMutation({ userId: auth.id });
  };

  const handleSuspendSubscription = () => {
    suspendSubscriptionMutation({ email: auth.email });
  };

  const handleActivateSubscription = () => {
    activateSubscriptionMutation({ email: auth.email });
  };

  const handleCancelSubscription = () => {
    cancelSubscriptionMutation({ email: auth.email });
  };

  const list = [
    `⭐ Remove all ads.`,
    `⭐ Remove playlist limits.`,
    `⭐ Create, share and save playlists.`,
    `⭐ Apply custom colors and fonts to quotes.`,
  ];

  return (
    <Stack gap="sm">
      {(auth.subscriptionStatus === SubscriptionStatus.Active ||
        auth.subscriptionStatus === SubscriptionStatus.Suspended) && (
        <SubscriptionInfo />
      )}

      {(auth.subscriptionStatus === SubscriptionStatus.Inactive ||
        auth.subscriptionStatus === SubscriptionStatus.Canceled ||
        auth.subscriptionStatus === SubscriptionStatus.Expired) && (
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
          <Button
            onClick={handleCreateSubscription}
            disabled={isCreateSubscriptionPending}
            type="submit"
            fullWidth
            bg="#F2BA36"
            c="black"
            loading={isCreateSubscriptionPending}
            loaderProps={{ type: "dots", color: "black" }}>
            Subscribe with PayPal
          </Button>
        </>
      )}

      {auth.subscriptionStatus === SubscriptionStatus.Active && (
        <Button
          onClick={handleSuspendSubscription}
          disabled={isSuspendSubscriptionPending}
          bg="#F2BA36"
          c="black"
          fullWidth
          loading={isCreateSubscriptionPending}
          loaderProps={{ type: "dots", color: "black" }}>
          Suspend Subscription
        </Button>
      )}

      {auth.subscriptionStatus === SubscriptionStatus.Suspended && (
        <Button
          onClick={handleActivateSubscription}
          disabled={isActivateSubscriptionPending}
          bg="green"
          fullWidth
          loading={isActivateSubscriptionPending}
          loaderProps={{ type: "dots", color: "white" }}>
          Activate Subscription
        </Button>
      )}

      {(auth.subscriptionStatus === SubscriptionStatus.Active ||
        auth.subscriptionStatus === SubscriptionStatus.Suspended) && (
        <Button
          onClick={handleCancelSubscription}
          disabled={isCancelSubscriptionPending}
          bg="red"
          fullWidth
          loading={isCancelSubscriptionPending}
          loaderProps={{ type: "dots", color: "white" }}>
          Cancel Subscription
        </Button>
      )}
    </Stack>
  );
};

export const SubscriptionInfo = () => {
  const { subscription } = useGetSubscription();

  if (subscription) console.log("Subscription", subscription);

  return <></>;
};
