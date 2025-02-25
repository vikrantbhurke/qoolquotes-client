import { Button, Modal, Stack, Text } from "@mantine/core";
import { useRemovePlaylistsBySaverId } from "@/playlist-saver/hooks/delete";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { useEffect } from "react";

export const RemovePlaylistsModal = ({ opened, close }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  const { removePlaylistsBySaverIdMutation, isPending, isSuccess } =
    useRemovePlaylistsBySaverId();

  useEffect(() => {
    if (isSuccess) close();
  }, [isSuccess]);

  const handleRemovePlaylistsBySaverId = () => {
    removePlaylistsBySaverIdMutation(auth.id);
    close();
  };

  return (
    <Modal
      styles={modal}
      overlayProps={modalOverlayProps}
      opened={opened}
      onClose={close}
      centered>
      <Stack gap="lg" align="center">
        <Text fz="sm" ta="center">
          Are you sure you want to remove all your saved playlists?
        </Text>

        <Button
          fullWidth
          bg="red"
          disabled={isPending}
          loading={isPending}
          onClick={handleRemovePlaylistsBySaverId}
          loaderProps={{ type: "dots" }}>
          Remove Playlists
        </Button>
      </Stack>
    </Modal>
  );
};
