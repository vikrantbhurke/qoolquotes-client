import {
  useCreateStripeSubscription,
  useActivateStripeSubscription,
} from "../hooks/create";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNotification } from "@/global/hooks";
import { RootState } from "@/global/states/store";
import {
  useGetStripeSubscription,
  useGetStripeSubscriptionId,
} from "../hooks/read";
import { NotificationColor } from "@/global/enums";
import { Status, Subscription } from "@/subscription/enums";
import { CancelStripeSubscriptionModal } from "./cancel-subscription.modal";
import { SuspendStripeSubscriptionModal } from "./suspend-stripe-subscription.modal";
import { useDispatch } from "react-redux";
import { setAuth } from "@/user/auth.slice";
import { Role } from "@/user/enums";
import { setSessionId } from "@/subscription/subscription.slice";

export const StripeSubscriptionButtons = ({ stripeSubscription }: any) => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const { refetchStripeSubscriptionId } = useGetStripeSubscriptionId();
  const { refetchStripeSubscription } = useGetStripeSubscription();
  const { auth } = useSelector((state: RootState) => state.auth);

  const {
    createStripeSubscriptionMutation,
    isPending: isCreateStripeSubscriptionPending,
  } = useCreateStripeSubscription();

  const {
    activateStripeSubscriptionMutation,
    isPending: isActivateStripeSubscriptionPending,
  } = useActivateStripeSubscription();

  const [
    suspendStripeSubscriptionModalOpened,
    {
      open: suspendStripeSubscriptionModalOpen,
      close: suspendStripeSubscriptionModalClose,
    },
  ] = useDisclosure();

  const [
    cancelStripeSubscriptionModalOpened,
    {
      open: cancelStripeSubscriptionModalOpen,
      close: cancelStripeSubscriptionModalClose,
    },
  ] = useDisclosure();

  useEffect(() => {
    const handleGetStripeSubscription = async () => {
      const query = new URLSearchParams(window.location.search);

      if (
        query.get("subscribed") === "true" &&
        query.get("subscription") === "stripe" &&
        !sessionStorage.getItem("subscriptionNotified")
      ) {
        sessionStorage.setItem("subscriptionNotified", "true");
        const sessionId = query.get("session_id");
        dispatch(setSessionId(sessionId));
        await refetchStripeSubscriptionId();

        dispatch(
          setAuth({
            ...auth,
            role: Role.Subscriber,
            subscription: Subscription.Stripe,
            subscriptionStatus: Status.Active,
          })
        );

        await refetchStripeSubscription();

        setTimeout(() => {
          showNotification(
            `Congrats! You have successfully subscribed to ${import.meta.env.VITE_APP_NAME}.`,
            NotificationColor.Success
          );
        }, 2000);
      }
    };

    handleGetStripeSubscription();
  }, []);

  const handleCreateStripeSubscription = () => {
    createStripeSubscriptionMutation({ userId: auth.id });
  };

  const handleActivateStripeSubscription = () => {
    activateStripeSubscriptionMutation({ subscriptionId: auth.subscriptionId });
  };

  let status: Status = Status.Inactive;
  let behavior = null;

  if (stripeSubscription) {
    const { status: stripeStatus, pause_collection } = stripeSubscription;
    if (pause_collection) behavior = pause_collection;

    if (stripeStatus === "active" && !behavior) status = Status.Active;
    if (stripeStatus === "active" && behavior) status = Status.Suspended;
    if (stripeStatus === "canceled") status = Status.Inactive;
    if (stripeStatus === "incomplete") status = Status.Inactive;
  }

  const query = new URLSearchParams(window.location.search);
  const isActive = status === Status.Active;
  const isInactive = status === Status.Inactive;
  const isSuspended = status === Status.Suspended;
  const isFree = auth.subscription === Subscription.Free;

  const isStripe =
    auth.subscription === Subscription.Stripe ||
    query.get("subscription") === "stripe";

  return (
    <>
      <SuspendStripeSubscriptionModal
        opened={suspendStripeSubscriptionModalOpened}
        close={suspendStripeSubscriptionModalClose}
      />

      <CancelStripeSubscriptionModal
        opened={cancelStripeSubscriptionModalOpened}
        close={cancelStripeSubscriptionModalClose}
      />

      <Stack gap="sm">
        {isFree && isInactive && (
          <Button
            fullWidth
            bg="#556CD6"
            type="submit"
            onClick={handleCreateStripeSubscription}
            disabled={isCreateStripeSubscriptionPending}
            loading={isCreateStripeSubscriptionPending}
            loaderProps={{ type: "dots" }}>
            Subscribe with Stripe
          </Button>
        )}

        {isStripe && isActive && (
          <Button
            onClick={suspendStripeSubscriptionModalOpen}
            bg="#F2BA36"
            c="black"
            fullWidth>
            Suspend Subscription
          </Button>
        )}

        {isStripe && isSuspended && (
          <Button
            bg="green"
            fullWidth
            onClick={handleActivateStripeSubscription}
            disabled={isActivateStripeSubscriptionPending}
            loading={isActivateStripeSubscriptionPending}
            loaderProps={{ type: "dots", color: "white" }}>
            Activate Subscription
          </Button>
        )}

        {isStripe && (isActive || isSuspended) && (
          <Button
            onClick={cancelStripeSubscriptionModalOpen}
            bg="red"
            fullWidth>
            Cancel Subscription
          </Button>
        )}
      </Stack>
    </>
  );
};
