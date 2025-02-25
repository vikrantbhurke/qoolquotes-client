import {
  useCreateSubscription,
  useActivateSubscription,
} from "../hooks/create";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Status } from "@/subscription/enums";
import { Button, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNotification } from "@/global/hooks";
import { RootState } from "@/global/states/store";
import { useGetSubscription } from "../hooks/read";
import { NotificationColor } from "@/global/enums";
import { CancelSubscriptionModal } from "./cancel-subscription.modal";
import { SuspendSubscriptionModal } from "./suspend-subscription.modal";
import { subscriptionUtility } from "@/subscription/subscription.utility";
import { useDispatch } from "react-redux";
import { setAuth } from "@/user/auth.slice";
import { Role } from "@/user/enums";
import { useQueryClient } from "@tanstack/react-query";

export const PayPalSubscriptionLayout = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();
  const { subscription, refetchSubscription } = useGetSubscription();
  const { auth } = useSelector((state: RootState) => state.auth);

  const { createSubscriptionMutation, isPending: isCreateSubscriptionPending } =
    useCreateSubscription();

  const {
    activateSubscriptionMutation,
    isPending: isActivateSubscriptionPending,
  } = useActivateSubscription();

  const [
    suspendSubscriptionModalOpened,
    {
      open: suspendSubscriptionModalOpen,
      close: suspendSubscriptionModalClose,
    },
  ] = useDisclosure();

  const [
    cancelSubscriptionModalOpened,
    { open: cancelSubscriptionModalOpen, close: cancelSubscriptionModalClose },
  ] = useDisclosure();

  useEffect(() => {
    const handleGetSubscription = async () => {
      const query = new URLSearchParams(window.location.search);

      if (
        query.get("subscribed") === "true" &&
        !sessionStorage.getItem("subscriptionNotified")
      ) {
        sessionStorage.setItem("subscriptionNotified", "true");

        await queryClient.cancelQueries({
          queryKey: ["getSubscription"],
        });

        await queryClient.setQueryData(
          ["getSubscription"],
          (previousSubscription: any) => {
            return {
              ...previousSubscription,
              status: "ACTIVE",
              start_time: Date.now(),
              billing_info: {
                next_billing_time: Date.now() + 31556952000,
              },
            };
          }
        );

        await refetchSubscription();
        dispatch(setAuth({ ...auth, role: Role.Subscriber }));

        setTimeout(() => {
          showNotification(
            `Congrats! You have successfully subscribed to ${import.meta.env.VITE_APP_NAME}.`,
            NotificationColor.Success
          );
        }, 2000);

        // setTimeout(() => {
        //   showNotification(
        //     `Subscription may take upto 30 seconds to reflect here. Revisit this page in few seconds.`,
        //     NotificationColor.Info,
        //     8000
        //   );
        // }, 8000);
      }
    };

    handleGetSubscription();
  }, []);

  const handleCreateSubscription = () => {
    createSubscriptionMutation({ userId: auth.id });
  };

  const handleActivateSubscription = () => {
    activateSubscriptionMutation({ email: auth.email });
  };

  const status = subscription?.status;

  const isSuspended =
    subscriptionUtility.getStatus(status) === Status.Suspended;
  const isInactive = subscriptionUtility.getStatus(status) === Status.Inactive;
  const isActive = subscriptionUtility.getStatus(status) === Status.Active;

  return (
    <>
      <SuspendSubscriptionModal
        opened={suspendSubscriptionModalOpened}
        close={suspendSubscriptionModalClose}
      />

      <CancelSubscriptionModal
        opened={cancelSubscriptionModalOpened}
        close={cancelSubscriptionModalClose}
      />

      <Stack gap="sm">
        {isInactive && (
          <Button
            fullWidth
            c="black"
            bg="#F2BA36"
            type="submit"
            onClick={handleCreateSubscription}
            disabled={isCreateSubscriptionPending}
            loading={isCreateSubscriptionPending}
            loaderProps={{ type: "dots", color: "black" }}>
            Subscribe with PayPal
          </Button>
        )}

        {isActive && (
          <Button
            onClick={suspendSubscriptionModalOpen}
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
            onClick={handleActivateSubscription}
            disabled={isActivateSubscriptionPending}
            loading={isActivateSubscriptionPending}
            loaderProps={{ type: "dots", color: "white" }}>
            Activate Subscription
          </Button>
        )}

        {(isActive || isSuspended) && (
          <Button onClick={cancelSubscriptionModalOpen} bg="red" fullWidth>
            Cancel Subscription
          </Button>
        )}
      </Stack>
    </>
  );
};
