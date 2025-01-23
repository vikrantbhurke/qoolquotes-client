import { useQuery } from "@tanstack/react-query";
import { getQuotesByPlaylistId } from "@/quote/quote.network";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { useSearchParams } from "react-router-dom";

export const useGetQuotesByPlaylistId = () => {
  let [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const { filterObject } = useSelector((state: RootState) => state.quote);
  const { id: pid } = filterObject;

  const {
    data: quotes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getQuotesByPlaylistId", page - 1, pid],
    queryFn: () => getQuotesByPlaylistId({ page: page - 1, pid }),
    enabled: !!pid,
  });

  const prevPage = quotes?.firstPage ? page : page - 1;
  const nextPage = quotes?.lastPage ? page : page + 1;
  const lastPage = quotes?.totalPages;

  useQuery({
    queryKey: ["getQuotesByPlaylistId", prevPage - 1, pid],

    queryFn: () =>
      getQuotesByPlaylistId({
        page: prevPage - 1,
        pid,
      }),

    enabled: !!prevPage,
  });

  useQuery({
    queryKey: ["getQuotesByPlaylistId", nextPage - 1, pid],

    queryFn: () =>
      getQuotesByPlaylistId({
        page: nextPage - 1,
        pid,
      }),

    enabled: !!nextPage,
  });

  useQuery({
    queryKey: ["getQuotesByPlaylistId", lastPage - 1, pid],

    queryFn: () =>
      getQuotesByPlaylistId({
        page: lastPage - 1,
        pid,
      }),

    enabled: !!lastPage,
  });

  return { quotes, isPending, isError, error };
};
