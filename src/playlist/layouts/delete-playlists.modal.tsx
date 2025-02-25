import { Button, Modal, Stack, Text } from "@mantine/core";
import { useDeletePlaylistsByCreatorId } from "../hooks/delete";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { useEffect } from "react";

export const DeletePlaylistsModal = ({ opened, close }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  const { deletePlaylistsByCreatorIdMutation, isPending, isSuccess } =
    useDeletePlaylistsByCreatorId();

  useEffect(() => {
    if (isSuccess) close();
  }, [isSuccess]);

  const handleDeletePlaylistsByCreatorId = async () => {
    await deletePlaylistsByCreatorIdMutation(auth.id);
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
          Are you sure you want to delete all your created playlists?
        </Text>

        <Button
          fullWidth
          bg="red"
          disabled={isPending}
          loading={isPending}
          onClick={handleDeletePlaylistsByCreatorId}
          loaderProps={{ type: "dots" }}>
          Delete Playlists
        </Button>
      </Stack>
    </Modal>
  );
};
