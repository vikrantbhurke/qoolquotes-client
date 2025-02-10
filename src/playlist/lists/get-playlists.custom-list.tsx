import { useOutletContext } from "react-router-dom";
import { useGetPlaylists } from "../hooks/read";
import { PlaylistListItemLayout } from "../layouts";
import { CustomList } from "@/global/components/lists";
import { useEffect } from "react";
import { CustomError } from "@/global/components/errors";
import { useSelector } from "react-redux";
import { setPage } from "../playlist.slice";
import { SeoComponent } from "@/global/components/reusables";
import { oneDefaultBg } from "@/global/styles/renamed.variables";
import { PaginationPlaceholder } from "@/global/components/placeholders";
import { RootState } from "@/global/states/store";

export const GetPlaylistsCustomList = () => {
  const { playlists, isPending, isError, error } = useGetPlaylists();
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
        <CustomError message="Playlists not found." />
        <PaginationPlaceholder />
      </>
    );

  return (
    <>
      <SeoComponent
        title={`Playlists Page ${page}`}
        description={`Browse quotes on page ${page} and find inspiration.`}
      />
      <CustomList
        page={page}
        listBg={oneDefaultBg}
        setPage={setPage}
        dataArray={playlists.content}
        totalPages={playlists.totalPages}
        ListItemLayout={PlaylistListItemLayout}
      />
    </>
  );
};
