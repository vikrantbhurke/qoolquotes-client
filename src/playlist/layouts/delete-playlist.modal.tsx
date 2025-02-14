import { Button, Modal, Stack, Text } from "@mantine/core";
import { useDeletePlaylistById } from "../hooks/delete";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";

export const DeletePlaylistModal = ({ pid, opened, close }: any) => {
  const { deletePlaylistByIdMutation, isPending } = useDeletePlaylistById();

  const handleDeletePlaylistById = () => {
    deletePlaylistByIdMutation(pid);
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
          onClick={handleDeletePlaylistById}
          fullWidth
          bg="red"
          loading={isPending}
          loaderProps={{ type: "dots" }}>
          Delete Playlist
        </Button>
      </Stack>
    </Modal>
  );
};
