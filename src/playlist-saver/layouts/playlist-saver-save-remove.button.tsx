import { useSelector } from "react-redux";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useCheckPlaylistSaver } from "../hooks/read";
import { useSavePlaylist } from "../hooks/create";
import { RemovePlaylistModal } from "./remove-playlist.modal";
import { RootState } from "@/global/states/store";

export const PlaylistSaverSaveRemoveButton = ({ pid }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

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
      <RemovePlaylistModal
        opened={removePlaylistOpened}
        close={removePlaylistClose}
        pid={pid}
      />

      <Button
        fullWidth
        bg={playlistSaver?.exists ? "red" : "green"}
        onClick={() => {
          if (playlistSaver?.exists) removePlaylistOpen();
          else handleSavePlaylist();
        }}
        disabled={isPending}
        loading={isPending}
        loaderProps={{ type: "dots" }}>
        {playlistSaver?.exists ? "Remove" : "Save"}
      </Button>
    </>
  );
};
