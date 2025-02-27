import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { useSuspendStripeSubscription } from "../hooks/create";
import { Button, Modal, Stack, Text } from "@mantine/core";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { useEffect } from "react";

export const SuspendStripeSubscriptionModal = ({ opened, close }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  const { suspendStripeSubscriptionMutation, isPending, isSuccess } =
    useSuspendStripeSubscription();

  useEffect(() => {
    if (isSuccess) close();
  }, [isSuccess]);

  const handleSuspendStripeSubscription = async () => {
    await suspendStripeSubscriptionMutation({
      subscriptionId: auth.subscriptionId,
    });
  };

  return (
    <Modal
      styles={modal}
      overlayProps={modalOverlayProps}
      opened={opened}
      onClose={close}
      centered>
      <Stack gap="lg">
        <Text fz="sm" ta="center">
          Are you sure you want to suspend your subscription? You can't access
          paid features and you won't be charged while suspended. You can always
          reactivate your subscription.
        </Text>

        <Button
          fullWidth
          bg="#F2BA36"
          c="black"
          disabled={isPending}
          loading={isPending}
          onClick={handleSuspendStripeSubscription}
          loaderProps={{ type: "dots", color: "black" }}>
          Suspend Subscription
        </Button>
      </Stack>
    </Modal>
  );
};
