import { useEffect } from "react";
import { useGetPlaylistsByCreatorId } from "../hooks/read";
import { PlaylistListItemLayout } from "../layouts";
import { CustomList } from "@/global/components/lists";
import { useOutletContext } from "react-router-dom";
import { CustomError } from "@/global/components/errors";
import { useSelector } from "react-redux";
import { setPage } from "../playlist.slice";
import { oneDefaultBg } from "@/global/styles/renamed.variables";
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
      <CustomList
        page={1}
        listBg={oneDefaultBg}
        setPage={setPage}
        dataArray={Array(10).fill({ isPending })}
        totalPages={1}
        ListItemLayout={PlaylistListItemLayout}
      />
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
      listBg={oneDefaultBg}
      dataArray={playlists.content}
      totalPages={playlists.totalPages}
      ListItemLayout={PlaylistListItemLayout}
    />
  );
};
