import { RootState } from "@/global/states/store";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { Button, Modal, Stack, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { useCancelSubscription } from "../hooks/create";

export const CancelSubscriptionModal = ({ opened, close }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  const { cancelSubscriptionMutation, isPending, isSuccess } =
    useCancelSubscription();

  const handleCancelSubscription = async () => {
    await cancelSubscriptionMutation({ email: auth.email });
    isSuccess && close();
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
          onClick={handleCancelSubscription}
          fullWidth
          bg="red"
          disabled={isPending}
          loading={isPending}
          loaderProps={{ type: "dots", color: "black" }}>
          Cancel Subscription
        </Button>
      </Stack>
    </Modal>
  );
};
