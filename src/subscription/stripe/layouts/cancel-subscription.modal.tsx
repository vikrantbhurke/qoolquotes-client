import { RootState } from "@/global/states/store";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { Button, Modal, Stack, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { useCancelStripeSubscription } from "../hooks/create";
import { useEffect } from "react";

export const CancelStripeSubscriptionModal = ({ opened, close }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  const { cancelStripeSubscriptionMutation, isPending, isSuccess } =
    useCancelStripeSubscription();

  useEffect(() => {
    if (isSuccess) close();
  }, [isSuccess]);

  const handleCancelStripeSubscription = async () => {
    await cancelStripeSubscriptionMutation({
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
          Are you sure you want to cancel your subscription? You will lose
          access to paid features immediately. You will have to subscribe again
          to regain access.
        </Text>

        <Button
          fullWidth
          bg="red"
          disabled={isPending}
          loading={isPending}
          onClick={handleCancelStripeSubscription}
          loaderProps={{ type: "dots", color: "white" }}>
          Cancel Subscription
        </Button>
      </Stack>
    </Modal>
  );
};
