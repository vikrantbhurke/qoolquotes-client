import { useEffect } from "react";
import { useGetPlaylistsByCreatorId } from "../hooks/read";
import { PlaylistListItemLayout } from "../layouts";
import { CustomList } from "@/global/components/lists";
import { useOutletContext } from "react-router-dom";
import { CustomLoader } from "@/global/components/loaders";
import { CustomError } from "@/global/components/errors";
import { useSelector } from "react-redux";
import { setPage } from "../playlist.slice";
import { oneBg } from "@/global/styles/app.css";
import { PaginationPlaceholder } from "@/global/components/placeholders";
import { RootState } from "@/global/states/store";

export const GetPlaylistsByCreatorIdCustomList = () => {
  const { playlists, isPending, isError, error } = useGetPlaylistsByCreatorId();
  const { page } = useSelector((state: RootState) => state.playlist);
  const setData = useOutletContext<any>();

  useEffect(() => {
    setData((data: any) => ({
      ...data,
      page: playlists?.page + 1 || 0,
      totalPages: playlists?.totalPages || 0,
      totalElements: playlists?.totalElements || 0,
    }));
  }, [playlists, setData]);

  if (isPending)
    return (
      <>
        <CustomLoader />
        <PaginationPlaceholder />
      </>
    );

  if (isError)
    return (
      <>
        <CustomError message={error?.message} />
        <PaginationPlaceholder />
      </>
    );

  if (!playlists.content.length)
    return (
      <>
        <CustomError message="You have created 0 playlists." />
        <PaginationPlaceholder />
      </>
    );

  return (
    <CustomList
      page={page}
      setPage={setPage}
      listBg={oneBg}
      dataArray={playlists.content}
      totalPages={playlists.totalPages}
      ListItemLayout={PlaylistListItemLayout}
    />
  );
};
