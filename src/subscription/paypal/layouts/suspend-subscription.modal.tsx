import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { useSuspendSubscription } from "../hooks/create";
import { Button, Modal, Stack, Text } from "@mantine/core";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";

export const SuspendSubscriptionModal = ({ opened, close }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const { suspendSubscriptionMutation, isPending } = useSuspendSubscription();

  const handleSuspendSubscription = () => {
    suspendSubscriptionMutation({ email: auth.email });
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
          Are you sure you want to suspend your subscription? During suspension
          period, you will not be able to access QoolQuotes paid features. You
          will also not be charged until you reactivate your subscription.
        </Text>

        <Button
          onClick={handleSuspendSubscription}
          fullWidth
          bg="#F2BA36"
          disabled={isPending}
          loading={isPending}
          loaderProps={{ type: "dots", color: "black" }}>
          Suspend Subscription
        </Button>
      </Stack>
    </Modal>
  );
};
