import { Button, Loader, Modal, Stack, Text } from "@mantine/core";
import { useRemovePlaylist } from "@/playlist-saver/hooks/delete";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { useSelector } from "react-redux";
import { oneTx } from "@/global/styles/app.css";

export const RemovePlaylistModalLayout = ({ pid, opened, close }: any) => {
  const { auth } = useSelector((state: any) => state.auth);
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
        <Text ta="center">Are you sure you want to remove playlist?</Text>

        <Button onClick={handleRemovePlaylist} fullWidth radius="sm" bg="red">
          {isPending ? <Loader type="dots" color={oneTx} /> : "Remove Playlist"}
        </Button>
      </Stack>
    </Modal>
  );
};
