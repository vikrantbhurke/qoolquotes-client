import { useQuery } from "@tanstack/react-query";
import { getPlaylists } from "@/playlist/playlist.network";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const useGetPlaylists = () => {
  const { page } = useSelector((state: RootState) => state.playlist);

  const {
    data: playlists,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getPlaylists", page - 1],
    queryFn: () => getPlaylists({ page: page - 1 }),
    enabled: !!page,
  });

  const prevPage = playlists?.firstPage ? page : page - 1;
  const nextPage = playlists?.lastPage ? page : page + 1;
  const lastPage = playlists?.totalPages;

  useQuery({
    queryKey: ["getPlaylists", prevPage - 1],

    queryFn: () =>
      getPlaylists({
        page: prevPage - 1,
      }),

    enabled: !!prevPage,
  });

  useQuery({
    queryKey: ["getPlaylists", nextPage - 1],

    queryFn: () =>
      getPlaylists({
        page: nextPage - 1,
      }),

    enabled: !!nextPage,
  });

  useQuery({
    queryKey: ["getPlaylists", lastPage - 1],

    queryFn: () =>
      getPlaylists({
        page: lastPage - 1,
      }),

    enabled: !!lastPage,
  });

  return { playlists, isPending, isError, error };
};
