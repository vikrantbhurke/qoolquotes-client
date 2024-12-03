import { Button, Loader, Modal, Stack, Text } from "@mantine/core";
import { useRemovePlaylistsBySaverId } from "@/playlist-saver/hooks/delete";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { useSelector } from "react-redux";
import { oneTx } from "@/global/styles/app.css";

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
          radius="sm"
          bg="red">
          {isPending ? (
            <Loader type="dots" color={oneTx} />
          ) : (
            "Remove Playlists"
          )}
        </Button>
      </Stack>
    </Modal>
  );
};
