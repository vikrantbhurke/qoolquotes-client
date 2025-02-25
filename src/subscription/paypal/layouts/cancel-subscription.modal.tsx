import { RootState } from "@/global/states/store";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { Button, Modal, Stack, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { useCancelSubscription } from "../hooks/create";
import { useEffect } from "react";

export const CancelSubscriptionModal = ({ opened, close }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  const { cancelSubscriptionMutation, isPending, isSuccess } =
    useCancelSubscription();

  useEffect(() => {
    if (isSuccess) close();
  }, [isSuccess]);

  const handleCancelSubscription = async () => {
    await cancelSubscriptionMutation({ email: auth.email });
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
          onClick={handleCancelSubscription}
          loaderProps={{ type: "dots", color: "black" }}>
          Cancel Subscription
        </Button>
      </Stack>
    </Modal>
  );
};
