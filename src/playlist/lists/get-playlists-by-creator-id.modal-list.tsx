import { useSelector } from "react-redux";
import { setPage } from "../playlist.slice";
import { PlaylistModalListItemLayout } from "../layouts";
import { useGetPlaylistsByCreatorId } from "../hooks/read";
import { CustomModalList } from "@/global/components/lists";
import { CustomModalLoader } from "@/global/components/loaders";
import { CustomModalError } from "@/global/components/errors";

export const GetPlaylistsByCreatorIdModalList = () => {
  const { page } = useSelector((state: any) => state.playlist);
  const { playlists, isPending, isError, error } = useGetPlaylistsByCreatorId();

  if (isPending) return <CustomModalLoader />;
  if (isError) return <CustomModalError message={error?.message} />;
  if (!playlists.content.length)
    return <CustomModalError message="You have created 0 playlists." />;

  return (
    <CustomModalList
      page={page}
      setPage={setPage}
      dataArray={playlists.content}
      totalPages={playlists.totalPages}
      ModalListItemLayout={PlaylistModalListItemLayout}
    />
  );
};
