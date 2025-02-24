import {
  useCancelSubscription,
  useCreateSubscription,
  useSuspendSubscription,
  useActivateSubscription,
} from "../hooks/create";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Status } from "@/subscription/enums";
import { RootState } from "@/global/states/store";
import { useGetSubscription } from "../hooks/read";
import { Button, Stack } from "@mantine/core";
import { subscriptionUtility } from "@/subscription/subscription.utility";

export const PayPalSubscriptionLayout = () => {
  const { refetchSubscription } = useGetSubscription();
  const [subscribed, setSubscribed] = useState(false);
  const { auth } = useSelector((state: RootState) => state.auth);

  const { subscription } = useSelector(
    (state: RootState) => state.subscription
  );

  useEffect(() => {
    const handleGetSubscription = async () => {
      const query = new URLSearchParams(window.location.search);

      if (query.get("subscribed")) {
        await refetchSubscription();
        setSubscribed((prev) => !prev);
      }
    };

    handleGetSubscription();
  }, []);

  useEffect(() => {
    const handleGetSubscription = async () => {
      const query = new URLSearchParams(window.location.search);

      if (query.get("subscribed")) {
        await refetchSubscription();
      }
    };

    handleGetSubscription();
  }, [subscribed]);

  console.log("Subscription", subscription);

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

  const status = subscription?.status;

  const isSuspended =
    subscriptionUtility.getStatus(status) === Status.Suspended;
  const isInactive = subscriptionUtility.getStatus(status) === Status.Inactive;
  const isActive = subscriptionUtility.getStatus(status) === Status.Active;
  const isCanceled = subscriptionUtility.getStatus(status) === Status.Canceled;
  const isExpired = subscriptionUtility.getStatus(status) === Status.Expired;

  return (
    <Stack gap="sm">
      {(isCanceled || isExpired || isInactive) && (
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
      )}

      {isActive && (
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

      {isSuspended && (
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

      {(isActive || isSuspended) && (
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
