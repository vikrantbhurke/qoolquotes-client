import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { useSuspendSubscription } from "../hooks/create";
import { Button, Modal, Stack, Text } from "@mantine/core";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";

export const SuspendSubscriptionModal = ({ opened, close }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  const { suspendSubscriptionMutation, isPending, isSuccess } =
    useSuspendSubscription();

  const handleSuspendSubscription = async () => {
    await suspendSubscriptionMutation({ email: auth.email });
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
          Are you sure you want to suspend your subscription? You can't access
          paid features and you won't be charged while suspended. You can always
          reactivate your subscription.
        </Text>

        <Button
          onClick={handleSuspendSubscription}
          fullWidth
          bg="#F2BA36"
          c="black"
          disabled={isPending}
          loading={isPending}
          loaderProps={{ type: "dots", color: "black" }}>
          Suspend Subscription
        </Button>
      </Stack>
    </Modal>
  );
};
