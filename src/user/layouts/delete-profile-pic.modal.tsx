import { Button, Modal, Stack, Text } from "@mantine/core";
import { useDeleteProfilePicById } from "../hooks/delete";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const DeleteProfilePicModal = ({ opened, close }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  const { deleteProfilePicByIdMutation, isPending, isSuccess } =
    useDeleteProfilePicById();

  useEffect(() => {
    if (isSuccess) close();
  }, [isSuccess]);

  const handleDeleteProfilePicById = () => {
    deleteProfilePicByIdMutation(auth.id);
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
          Are you sure you want to delete your profile pic?
        </Text>

        <Button
          fullWidth
          bg="red"
          disabled={isPending}
          loading={isPending}
          onClick={handleDeleteProfilePicById}
          loaderProps={{ type: "dots" }}>
          Delete Profile Pic
        </Button>
      </Stack>
    </Modal>
  );
};
