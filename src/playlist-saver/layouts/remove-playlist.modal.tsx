import { Button, Modal, Stack, Text } from "@mantine/core";
import { useRemovePlaylist } from "@/playlist-saver/hooks/delete";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const RemovePlaylistModal = ({ pid, opened, close }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const { removePlaylistMutation, isPending } = useRemovePlaylist();

  const handleRemovePlaylist = () => {
    close();
    removePlaylistMutation({
      pid,
      sid: auth.id,
    });
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
          Are you sure you want to remove playlist?
        </Text>

        <Button
          onClick={handleRemovePlaylist}
          fullWidth
          bg="red"
          loading={isPending}
          loaderProps={{ type: "dots" }}>
          Remove Playlist
        </Button>
      </Stack>
    </Modal>
  );
};
