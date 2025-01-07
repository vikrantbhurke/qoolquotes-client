import { useQuery } from "@tanstack/react-query";
import { getPlaylists } from "@/playlist/playlist.network";
import { Sort } from "@/playlist/enums";
import { Order } from "@/global/enums";

export const useGetPlaylists = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const page = Number(urlParams.get("page") || "1");
  const sort = urlParams.get("sort") as Sort;
  const order = urlParams.get("order") as Order;

  const {
    data: playlists,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getPlaylists", page - 1, sort, order],
    queryFn: () => getPlaylists({ page: page - 1, sort, order }),
    enabled: !!page,
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
