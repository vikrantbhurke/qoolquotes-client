import { useQuery } from "@tanstack/react-query";
import { getPlaylists } from "@/playlist/playlist.network";
import { Sort } from "@/playlist/enums";
import { Order } from "@/global/enums";
import { useSearchParams } from "react-router-dom";

export const useGetPlaylists = () => {
  let [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const sort = searchParams.get("sort") as Sort;
  const order = searchParams.get("order") as Order;

  const {
    data: playlists,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getPlaylists", page - 1, sort, order],
    queryFn: () => getPlaylists({ page: page - 1, sort, order }),
  });

  const prevPage = playlists?.firstPage ? page : page - 1;
  const nextPage = playlists?.lastPage ? page : page + 1;
  const lastPage = playlists?.totalPages;

  useQuery({
    queryKey: ["getPlaylists", prevPage - 1, sort, order],

    queryFn: () =>
      getPlaylists({
        page: prevPage - 1,
        sort,
        order,
      }),

    enabled: !!prevPage,
  });

  useQuery({
    queryKey: ["getPlaylists", nextPage - 1, sort, order],

    queryFn: () =>
      getPlaylists({
        page: nextPage - 1,
        sort,
        order,
      }),

    enabled: !!nextPage,
  });

  useQuery({
    queryKey: ["getPlaylists", lastPage - 1, sort, order],

    queryFn: () =>
      getPlaylists({
        page: lastPage - 1,
        sort,
        order,
      }),

    enabled: !!lastPage,
  });

  return { playlists, isPending, isError, error };
};
