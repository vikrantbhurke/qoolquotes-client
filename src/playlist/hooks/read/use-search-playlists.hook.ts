import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/global/states/store";
import { searchPlaylists } from "@/playlist/playlist.network";
import { useSearchParams } from "react-router-dom";

export const useSearchPlaylists = () => {
  const { search } = useSelector((state: RootState) => state.view);
  let [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");

  const {
    data: playlists,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["searchPlaylists", page - 1, search],
    queryFn: () => searchPlaylists({ page: page - 1, search }),
    enabled: !!page,
  });

  const prevPage = playlists?.firstPage ? page : page - 1;
  const nextPage = playlists?.lastPage ? page : page + 1;
  const lastPage = playlists?.totalPages;

  useQuery({
    queryKey: ["searchPlaylists", prevPage - 1, search],

    queryFn: () =>
      searchPlaylists({
        page: prevPage - 1,
        search,
      }),

    enabled: !!prevPage,
  });

  useQuery({
    queryKey: ["searchPlaylists", nextPage - 1, search],

    queryFn: () =>
      searchPlaylists({
        page: nextPage - 1,
        search,
      }),

    enabled: !!nextPage,
  });

  useQuery({
    queryKey: ["searchPlaylists", lastPage - 1, search],

    queryFn: () =>
      searchPlaylists({
        page: lastPage - 1,
        search,
      }),

    enabled: !!lastPage,
  });

  return { playlists, isPending, isError, error };
};
