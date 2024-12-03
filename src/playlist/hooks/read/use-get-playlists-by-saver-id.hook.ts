import { useQuery } from "@tanstack/react-query";
import { getPlaylistsBySaverId } from "@/playlist/playlist.network";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const useGetPlaylistsBySaverId = () => {
  const { page } = useSelector((state: RootState) => state.playlist);
  const { auth } = useSelector((state: RootState) => state.auth);

  const {
    data: playlists,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getPlaylistsBySaverId", page - 1, auth.id],
    queryFn: () => getPlaylistsBySaverId({ page: page - 1, sid: auth.id }),
    enabled: !!page,
  });

  const prevPage = playlists?.firstPage ? page : page - 1;
  const nextPage = playlists?.lastPage ? page : page + 1;
  const lastPage = playlists?.totalPages;

  useQuery({
    queryKey: ["getPlaylistsBySaverId", prevPage - 1, auth.id],

    queryFn: () =>
      getPlaylistsBySaverId({
        page: prevPage - 1,
        sid: auth.id,
      }),

    enabled: !!prevPage,
  });

  useQuery({
    queryKey: ["getPlaylistsBySaverId", nextPage - 1, auth.id],

    queryFn: () =>
      getPlaylistsBySaverId({
        page: nextPage - 1,
        sid: auth.id,
      }),

    enabled: !!nextPage,
  });

  useQuery({
    queryKey: ["getPlaylistsBySaverId", lastPage - 1, auth.id],

    queryFn: () =>
      getPlaylistsBySaverId({
        page: lastPage - 1,
        sid: auth.id,
      }),

    enabled: !!lastPage,
  });

  return { playlists, isPending, isError, error };
};
