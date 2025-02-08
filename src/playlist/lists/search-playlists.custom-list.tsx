import { useOutletContext } from "react-router-dom";
import { useSearchPlaylists } from "../hooks/read";
import { PlaylistListItemLayout } from "../layouts";
import { CustomList } from "@/global/components/lists";
import { useEffect } from "react";
import { CustomError } from "@/global/components/errors";
import { useSelector } from "react-redux";
import { setPage } from "../playlist.slice";
import { oneBg } from "@/global/styles/app.css";
import { PaginationPlaceholder } from "@/global/components/placeholders";
import { RootState } from "@/global/states/store";

export const SearchPlaylistsCustomList = () => {
  const { playlists, isPending, isError, error } = useSearchPlaylists();
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
        listBg={oneBg}
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
        <CustomError message="Playlists not found." />
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
