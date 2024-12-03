import { useSelector } from "react-redux";
import { Button, Loader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useCheckPlaylistSaver } from "../hooks/read";
import { useSavePlaylist } from "../hooks/create";
import { RemovePlaylistModalLayout } from "./remove-playlist-modal.layout";
import { oneTx } from "@/global/styles/app.css";

export const PlaylistSaverSaveRemoveButtonLayout = ({ pid }: any) => {
  const { auth } = useSelector((state: any) => state.auth);

  const [
    removePlaylistOpened,
    { open: removePlaylistOpen, close: removePlaylistClose },
  ] = useDisclosure();

  const { playlistSaver } = useCheckPlaylistSaver({ pid });

  const { savePlaylistMutation, isPending: isSavingPending } =
    useSavePlaylist();

  const handleSavePlaylist = () => {
    savePlaylistMutation({
      pid,
      sid: auth.id,
    });
  };

  return (
    <>
      <RemovePlaylistModalLayout
        opened={removePlaylistOpened}
        close={removePlaylistClose}
        pid={pid}
      />

      {playlistSaver?.exists ? (
        <Button fullWidth radius="sm" bg="red" onClick={removePlaylistOpen}>
          Remove
        </Button>
      ) : (
        <Button
          fullWidth
          disabled={isSavingPending}
          radius="sm"
          bg="green"
          onClick={handleSavePlaylist}>
          {isSavingPending ? <Loader type="dots" color={oneTx} /> : "Save"}
        </Button>
      )}
    </>
  );
};
