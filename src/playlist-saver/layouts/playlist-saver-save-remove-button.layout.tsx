import { useSelector } from "react-redux";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useCheckPlaylistSaver } from "../hooks/read";
import { useSavePlaylist } from "../hooks/create";
import { RemovePlaylistModalLayout } from "./remove-playlist-modal.layout";

export const PlaylistSaverSaveRemoveButtonLayout = ({ pid }: any) => {
  const { auth } = useSelector((state: any) => state.auth);

  const [
    removePlaylistOpened,
    { open: removePlaylistOpen, close: removePlaylistClose },
  ] = useDisclosure();

  const { playlistSaver } = useCheckPlaylistSaver({ pid });

  const { savePlaylistMutation, isPending } = useSavePlaylist();

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

      <Button
        fullWidth
        disabled={isPending}
        bg={playlistSaver?.exists ? "red" : "green"}
        onClick={() => {
          if (playlistSaver?.exists) removePlaylistOpen();
          else handleSavePlaylist();
        }}
        loading={isPending}
        loaderProps={{ type: "dots" }}>
        {playlistSaver?.exists ? "Remove" : "Save"}
      </Button>
    </>
  );
};
