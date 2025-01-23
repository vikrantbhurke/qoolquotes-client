import { useOutletContext } from "react-router-dom";
import { useGetPlaylists } from "../hooks/read";
import { PlaylistListItemLayout } from "../layouts";
import { CustomList } from "@/global/components/lists";
import { useEffect } from "react";
import { CustomLoader } from "@/global/components/loaders";
import { CustomError } from "@/global/components/errors";
import { useSelector } from "react-redux";
import { setPage } from "../playlist.slice";
import { SeoComponent } from "@/global/components/components";
import { oneBg, twoBg } from "@/global/styles/app.css";

export const GetPlaylistsCustomList = () => {
  const { isMobile } = useSelector((state: any) => state.view);
  const { playlists, isPending, isError, error } = useGetPlaylists();
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

  if (isPending) return <CustomLoader />;

  if (isError) return <CustomError message={error?.message} />;

  if (!playlists.content.length)
    return <CustomError message="Playlists not found." />;

  return (
    <>
      <SeoComponent
        title={`Playlists Page ${page}`}
        description={`Browse quotes on page ${page} and find inspiration.`}
      />
      <CustomList
        page={page}
        listBg={isMobile ? oneBg : twoBg}
        setPage={setPage}
        dataArray={playlists.content}
        totalPages={playlists.totalPages}
        ListItemLayout={PlaylistListItemLayout}
      />
    </>
  );
};
