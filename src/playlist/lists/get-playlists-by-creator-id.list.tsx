import { useEffect } from "react";
import { useGetPlaylistsByCreatorId } from "../hooks/read";
import { PlaylistListItemLayout } from "../layouts";
import { CustomList } from "@/global/components/lists";
import { useOutletContext } from "react-router-dom";
import { CustomLoader } from "@/global/components/loaders";
import { CustomError } from "@/global/components/errors";
import { useSelector } from "react-redux";
import { setPage } from "../playlist.slice";
import { oneBg, twoBg } from "@/global/styles/app.css";

export const GetPlaylistsByCreatorIdList = () => {
  const { isMobile } = useSelector((state: any) => state.view);
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

  if (isPending) return <CustomLoader />;

  if (isError) return <CustomError message={error?.message} />;

  if (!playlists.content.length)
    return <CustomError message="You have created 0 playlists." />;

  return (
    <CustomList
      page={page}
      setPage={setPage}
      listBg={isMobile ? oneBg : twoBg}
      dataArray={playlists.content}
      totalPages={playlists.totalPages}
      ListItemLayout={PlaylistListItemLayout}
    />
  );
};
