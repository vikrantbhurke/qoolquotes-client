import { Button, Modal, Stack, Text } from "@mantine/core";
import { useRemovePlaylistsBySaverId } from "@/playlist-saver/hooks/delete";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { useSelector } from "react-redux";

export const RemovePlaylistsModalLayout = ({ opened, close }: any) => {
  const { auth } = useSelector((state: any) => state.auth);

  const { removePlaylistsBySaverIdMutation, isPending } =
    useRemovePlaylistsBySaverId();

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
        <Text ta="center">
          Are you sure you want to remove all your saved playlists?
        </Text>

        <Button
          onClick={handleRemovePlaylistsBySaverId}
          fullWidth
          bg="red"
          loading={isPending}
          loaderProps={{ type: "dots" }}>
          Remove Playlists
        </Button>
      </Stack>
    </Modal>
  );
};
