import { useOutletContext } from "react-router-dom";
import { useGetPlaylistsBySaverId } from "../hooks/read";
import { PlaylistListItemLayout } from "../layouts";
import { CustomList } from "@/global/components/lists";
import { useEffect } from "react";
import { CustomLoader } from "@/global/components/loaders";
import { CustomError } from "@/global/components/errors";
import { useSelector } from "react-redux";
import { setPage } from "../playlist.slice";
import { oneBg } from "@/global/styles/app.css";
import { PaginationPlaceholder } from "@/global/components/placeholders";

export const GetPlaylistsBySaverIdCustomList = () => {
  const { playlists, isPending, isError, error } = useGetPlaylistsBySaverId();
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
        <CustomError message="You have saved 0 playlists." />
        <PaginationPlaceholder />
      </>
    );

  return (
    <CustomList
      page={page}
      listBg={oneBg}
      setPage={setPage}
      dataArray={playlists.content}
      totalPages={playlists.totalPages}
      ListItemLayout={PlaylistListItemLayout}
    />
  );
};
