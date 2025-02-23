import {
  useCancelSubscription,
  useCreateSubscription,
  useSuspendSubscription,
  useActivateSubscription,
} from "../hooks/create";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSubscribed } from "@/user/auth.slice";
import { RootState } from "@/global/states/store";
import { useGetSubscription } from "../hooks/read";
import { Button, Stack, Text, Title } from "@mantine/core";

export const PayPalSubscriptionLayout = () => {
  const dispatch = useDispatch();
  const { refetchSubscription } = useGetSubscription();
  useSelector((state: RootState) => state.auth.subscribed);
  const { auth, subscription, subscribed } = useSelector(
    (state: RootState) => state.auth
  );

  console.log("Subscription", subscription);

  useEffect(() => {
    const handleGetSubscription = async () => {
      const query = new URLSearchParams(window.location.search);
      const isSubscribed = query.get("subscribed");

      console.log("useEffect fired");
      console.log("isSubscribed", isSubscribed);

      if (isSubscribed) {
        await refetchSubscription();
        dispatch(setSubscribed(true));
        console.log("refetchSubscription fired");
        console.log("setSubscribed dispatched");
      }
    };

    handleGetSubscription();
  }, [subscribed, refetchSubscription, dispatch, setSubscribed]);

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
      {/* {(auth.subscriptionStatus === SubscriptionStatus.Inactive ||
        auth.subscriptionStatus === SubscriptionStatus.Canceled ||
        auth.subscriptionStatus === SubscriptionStatus.Expired) && ( */}

      {(subscription?.status === "CANCELLED" ||
        subscription?.status === "EXPIRED" ||
        !subscription) && (
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

      {/* {auth.subscriptionStatus === SubscriptionStatus.Active && ( */}
      {subscription?.status === "ACTIVE" && (
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

      {/* {auth.subscriptionStatus === SubscriptionStatus.Suspended && ( */}
      {subscription?.status === "SUSPENDED" && (
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

      {/* {(auth.subscriptionStatus === SubscriptionStatus.Active ||
        auth.subscriptionStatus === SubscriptionStatus.Suspended) && ( */}
      {(subscription?.status === "ACTIVE" ||
        subscription?.status === "SUSPENDED") && (
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
