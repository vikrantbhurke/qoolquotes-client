import { useEffect } from "react";
import { useGetPlaylistsByCreatorId } from "../hooks/read";
import { PlaylistListItemLayout } from "../layouts";
import { CustomList } from "@/global/components/lists";
import { useOutletContext } from "react-router-dom";
import { CustomLoader } from "@/global/components/loaders";
import { CustomError } from "@/global/components/errors";
import { subheaderHeight } from "@/global/styles/global.styles";
import { useSelector } from "react-redux";
import { setPage } from "../playlist.slice";

export const GetPlaylistsByCreatorIdList = () => {
  const { playlists, isPending, isError, error } = useGetPlaylistsByCreatorId();
  const { page } = useSelector((state: any) => state.playlist);
  const setData = useOutletContext<any>();

  useEffect(() => {
    setData((data: any) => ({
      ...data,
      page: playlists?.page + 1 || 0,
      totalPages: playlists?.totalPages || 0,
      totalElements: playlists?.totalElements || 0,
    }));
  }, [playlists, setData]);

  if (isPending) return <CustomLoader subheaderHeight={subheaderHeight} />;

  if (isError)
    return (
      <CustomError subheaderHeight={subheaderHeight} message={error?.message} />
    );

  if (!playlists.content.length)
    return (
      <CustomError
        subheaderHeight={subheaderHeight}
        message="You have created 0 playlists."
      />
    );

  return (
    <CustomList
      page={page}
      setPage={setPage}
      dataArray={playlists.content}
      totalPages={playlists.totalPages}
      ListItemLayout={PlaylistListItemLayout}
    />
  );
};
