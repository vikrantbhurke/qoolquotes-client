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
import { useGetStripeSubscription } from "../hooks/read";
import { NotificationColor } from "@/global/enums";
import { Status, Subscription } from "@/subscription/enums";
import { CancelStripeSubscriptionModal } from "./cancel-subscription.modal";
import { subscriptionUtility } from "@/subscription/subscription.utility";
import { SuspendStripeSubscriptionModal } from "./suspend-stripe-subscription.modal";
import { useDispatch } from "react-redux";
import { setAuth } from "@/user/auth.slice";
import { Role } from "@/user/enums";

export const StripeSubscriptionButtons = ({ stripeSubscription }: any) => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
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
        !sessionStorage.getItem("subscriptionNotified")
      ) {
        sessionStorage.setItem("subscriptionNotified", "true");

        await refetchStripeSubscription();

        dispatch(
          setAuth({
            ...auth,
            role: Role.Subscriber,
            subscriptio: Subscription.Stripe,
          })
        );

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

  const query = new URLSearchParams(window.location.search);

  const status =
    query.get("subscribed") === "true" ? "ACTIVE" : stripeSubscription?.status;

  const isSuspended =
    subscriptionUtility.getStatus(status) === Status.Suspended;
  const isInactive = subscriptionUtility.getStatus(status) === Status.Inactive;
  const isActive = subscriptionUtility.getStatus(status) === Status.Active;

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
        {auth.subscription !== Subscription.PayPal && isInactive && (
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

        {isActive && (
          <Button
            onClick={suspendStripeSubscriptionModalOpen}
            bg="#F2BA36"
            c="black"
            fullWidth>
            Suspend Subscription
          </Button>
        )}

        {isSuspended && (
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

        {(isActive || isSuspended) && (
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
