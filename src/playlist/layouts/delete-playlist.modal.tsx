import { Button, Modal, Stack, Text } from "@mantine/core";
import { useDeletePlaylistById } from "../hooks/delete";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { useEffect } from "react";

export const DeletePlaylistModal = ({ pid, opened, close }: any) => {
  const { deletePlaylistByIdMutation, isPending, isSuccess } =
    useDeletePlaylistById();

  useEffect(() => {
    if (isSuccess) close();
  }, [isSuccess]);

  const handleDeletePlaylistById = async () => {
    await deletePlaylistByIdMutation(pid);
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
          Are you sure you want to delete playlist?
        </Text>

        <Button
          fullWidth
          bg="red"
          disabled={isPending}
          loading={isPending}
          onClick={handleDeletePlaylistById}
          loaderProps={{ type: "dots" }}>
          Delete Playlist
        </Button>
      </Stack>
    </Modal>
  );
};
