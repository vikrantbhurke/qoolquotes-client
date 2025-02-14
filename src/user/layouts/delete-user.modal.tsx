import { Button, Modal, Stack, Text } from "@mantine/core";
import { useDeleteUserById } from "../hooks/delete";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const DeleteUserModal = ({ opened, close }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const { deleteUserByIdMutation, isPending, isSuccess } = useDeleteUserById();

  const handleDeleteUserById = () => {
    deleteUserByIdMutation(auth.id);
  };

  useEffect(() => {
    if (isSuccess) close();
  }, [isSuccess]);

  return (
    <Modal
      styles={modal}
      overlayProps={modalOverlayProps}
      opened={opened}
      onClose={close}
      centered>
      <Stack gap="lg">
        <Text fz="sm" ta="center">
          Are you sure you want to delete account?
        </Text>

        <Button
          onClick={handleDeleteUserById}
          fullWidth
          bg="red"
          loading={isPending}
          loaderProps={{ type: "dots" }}>
          Delete Account
        </Button>
      </Stack>
    </Modal>
  );
};
