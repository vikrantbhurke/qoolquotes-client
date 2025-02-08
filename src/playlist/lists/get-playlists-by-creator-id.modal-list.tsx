import { useSelector } from "react-redux";
import { setPage } from "../playlist.slice";
import { PlaylistModalListItemLayout } from "../layouts";
import { useGetPlaylistsByCreatorId } from "../hooks/read";
import { CustomModalList } from "@/global/components/lists";
import { CustomModalError } from "@/global/components/errors";
import { RootState } from "@/global/states/store";

export const GetPlaylistsByCreatorIdModalList = () => {
  const { page } = useSelector((state: RootState) => state.playlist);
  const { playlists, isPending, isError, error } = useGetPlaylistsByCreatorId();

  if (isPending)
    return (
      <CustomModalList
        page={1}
        setPage={setPage}
        dataArray={Array(10).fill({ isPending })}
        totalPages={1}
        ModalListItemLayout={PlaylistModalListItemLayout}
      />
    );

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
