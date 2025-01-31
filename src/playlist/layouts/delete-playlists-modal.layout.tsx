import { Button, Modal, Stack, Text } from "@mantine/core";
import { useDeletePlaylistsByCreatorId } from "../hooks/delete";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const DeletePlaylistsModalLayout = ({ opened, close }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  const { deletePlaylistsByCreatorIdMutation, isPending } =
    useDeletePlaylistsByCreatorId();

  const handleDeletePlaylistsByCreatorId = () => {
    deletePlaylistsByCreatorIdMutation(auth.id);
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
        <Text ta="center">
          Are you sure you want to delete all your created playlists?
        </Text>

        <Button
          onClick={handleDeletePlaylistsByCreatorId}
          fullWidth
          bg="red"
          loading={isPending}
          loaderProps={{ type: "dots" }}>
          Delete Playlists
        </Button>
      </Stack>
    </Modal>
  );
};
