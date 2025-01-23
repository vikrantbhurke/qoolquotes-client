import { useQuery } from "@tanstack/react-query";
import { getPlaylistsByCreatorId } from "@/playlist/playlist.network";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { useSearchParams } from "react-router-dom";

export const useGetPlaylistsByCreatorId = () => {
  let [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const { auth } = useSelector((state: RootState) => state.auth);

  const {
    data: playlists,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getPlaylistsByCreatorId", page - 1, auth.id],
    queryFn: () => getPlaylistsByCreatorId({ page: page - 1, cid: auth.id }),
  });

  const prevPage = playlists?.firstPage ? page : page - 1;
  const nextPage = playlists?.lastPage ? page : page + 1;
  const lastPage = playlists?.totalPages;

  useQuery({
    queryKey: ["getPlaylistsByCreatorId", prevPage - 1, auth.id],

    queryFn: () =>
      getPlaylistsByCreatorId({
        page: prevPage - 1,
        cid: auth.id,
      }),

    enabled: !!prevPage,
  });

  useQuery({
    queryKey: ["getPlaylistsByCreatorId", nextPage - 1, auth.id],

    queryFn: () =>
      getPlaylistsByCreatorId({
        page: nextPage - 1,
        cid: auth.id,
      }),

    enabled: !!nextPage,
  });

  useQuery({
    queryKey: ["getPlaylistsByCreatorId", lastPage - 1, auth.id],

    queryFn: () =>
      getPlaylistsByCreatorId({
        page: lastPage - 1,
        cid: auth.id,
      }),

    enabled: !!lastPage,
  });

  return { playlists, isPending, isError, error };
};
