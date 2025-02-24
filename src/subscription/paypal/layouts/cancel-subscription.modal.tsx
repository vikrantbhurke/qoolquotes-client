import { RootState } from "@/global/states/store";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { Button, Modal, Stack, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { useCancelSubscription } from "../hooks/create";

export const CancelSubscriptionModal = ({ opened, close }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  const { cancelSubscriptionMutation } = useCancelSubscription();

  const handleCancelSubscription = () => {
    cancelSubscriptionMutation({ email: auth.email });
    close();
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

        <Button onClick={handleCancelSubscription} fullWidth bg="red">
          Cancel Subscription
        </Button>
      </Stack>
    </Modal>
  );
};
