import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/global/states/store";
import { Button, Modal, Stack, Text } from "@mantine/core";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { oneDefaultBg, oneDefaultTx } from "@/global/styles/renamed.variables";

export const SubscribeModal = ({ opened, close }: any) => {
  const navigate = useNavigate();
  const { auth } = useSelector((state: RootState) => state.auth);

  const handleNavigateToUser = async () => {
    close();
    if (!auth.id) return navigate("/sign-in");
    navigate(`/users/${auth.id}`);
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
          You must have active subscription to access this feature.
        </Text>

        <Button
          c={oneDefaultBg}
          bg={oneDefaultTx}
          fullWidth
          onClick={handleNavigateToUser}>
          Subscribe to {import.meta.env.VITE_APP_NAME}
        </Button>
      </Stack>
    </Modal>
  );
};
