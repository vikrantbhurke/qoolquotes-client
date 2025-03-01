import {
  useCreatePayPalSubscription,
  useActivatePayPalSubscription,
} from "../hooks/create";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Status, Subscription } from "@/subscription/enums";
import { Button, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNotification } from "@/global/hooks";
import { RootState } from "@/global/states/store";
import { useGetPayPalSubscription } from "../hooks/read";
import { NotificationColor } from "@/global/enums";
import { CancelPayPalSubscriptionModal } from "./cancel-paypal-subscription.modal";
import { SuspendPayPalSubscriptionModal } from "./suspend-paypal-subscription.modal";
import { useDispatch } from "react-redux";
import { setAuth } from "@/user/auth.slice";
import { Role } from "@/user/enums";

export const PayPalSubscriptionButtons = ({ paypalSubscription }: any) => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const { refetchPayPalSubscription } = useGetPayPalSubscription();
  const { auth } = useSelector((state: RootState) => state.auth);

  const {
    createPayPalSubscriptionMutation,
    isPending: isCreatePayPalSubscriptionPending,
  } = useCreatePayPalSubscription();

  const {
    activatePayPalSubscriptionMutation,
    isPending: isActivatePayPalSubscriptionPending,
  } = useActivatePayPalSubscription();

  const [
    suspendPayPalSubscriptionModalOpened,
    {
      open: suspendPayPalSubscriptionModalOpen,
      close: suspendPayPalSubscriptionModalClose,
    },
  ] = useDisclosure();

  const [
    cancelPayPalSubscriptionModalOpened,
    {
      open: cancelPayPalSubscriptionModalOpen,
      close: cancelPayPalSubscriptionModalClose,
    },
  ] = useDisclosure();

  useEffect(() => {
    const handleGetPayPalSubscription = async () => {
      const query = new URLSearchParams(window.location.search);

      if (
        query.get("subscribed") === "true" &&
        query.get("subscription") === "paypal" &&
        !sessionStorage.getItem("subscriptionNotified")
      ) {
        sessionStorage.setItem("subscriptionNotified", "true");
        const subscriptionId = query.get("subscription_id");

        dispatch(
          setAuth({
            ...auth,
            subscriptionId,
            role: Role.Subscriber,
            subscription: Subscription.PayPal,
            subscriptionStatus: Status.Active,
          })
        );

        await refetchPayPalSubscription();

        setTimeout(() => {
          showNotification(
            `Congrats! You have successfully subscribed to ${import.meta.env.VITE_APP_NAME}.`,
            NotificationColor.Success
          );
        }, 2000);
      }
    };

    handleGetPayPalSubscription();
  }, []);

  const handleCreatePayPalSubscription = () => {
    createPayPalSubscriptionMutation({ userId: auth.id });
  };

  const handleActivatePayPalSubscription = () => {
    activatePayPalSubscriptionMutation({ subscriptionId: auth.subscriptionId });
  };

  let status: Status = Status.Inactive;

  if (paypalSubscription) {
    const { status: paypalStatus } = paypalSubscription;
    if (paypalStatus === "ACTIVE") status = Status.Active;
    if (paypalStatus === "SUSPENDED") status = Status.Suspended;
    if (paypalStatus === "CANCELLED") status = Status.Inactive;
    if (paypalStatus === "EXPIRED") status = Status.Inactive;
  }

  const isActive = status === Status.Active;
  const isSuspended = status === Status.Suspended;
  const isInactive = status === Status.Inactive;

  return (
    <>
      <SuspendPayPalSubscriptionModal
        opened={suspendPayPalSubscriptionModalOpened}
        close={suspendPayPalSubscriptionModalClose}
      />

      <CancelPayPalSubscriptionModal
        opened={cancelPayPalSubscriptionModalOpened}
        close={cancelPayPalSubscriptionModalClose}
      />

      <Stack gap="sm">
        {isInactive && (
          <Button
            fullWidth
            c="black"
            bg="#F2BA36"
            type="submit"
            onClick={handleCreatePayPalSubscription}
            disabled={isCreatePayPalSubscriptionPending}
            loading={isCreatePayPalSubscriptionPending}
            loaderProps={{ type: "dots", color: "black" }}>
            Subscribe with PayPal
          </Button>
        )}

        {isActive && (
          <Button
            onClick={suspendPayPalSubscriptionModalOpen}
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
            onClick={handleActivatePayPalSubscription}
            disabled={isActivatePayPalSubscriptionPending}
            loading={isActivatePayPalSubscriptionPending}
            loaderProps={{ type: "dots", color: "white" }}>
            Activate Subscription
          </Button>
        )}

        {(isActive || isSuspended) && (
          <Button
            onClick={cancelPayPalSubscriptionModalOpen}
            bg="red"
            fullWidth>
            Cancel Subscription
          </Button>
        )}
      </Stack>
    </>
  );
};
