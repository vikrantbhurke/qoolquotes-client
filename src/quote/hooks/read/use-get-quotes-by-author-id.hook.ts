import { useQuery } from "@tanstack/react-query";
import { getQuotesByAuthorId } from "@/quote/quote.network";
import { useLocation } from "react-router-dom";
import { RootState } from "@/global/states/store";
import { useSelector } from "react-redux";

export const useGetQuotesByAuthorId = () => {
  const location = useLocation();
  const aid = location.state.aid;
  const { page } = useSelector((state: RootState) => state.quote);

  const {
    data: quotes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getQuotesByAuthorId", page - 1, aid],

    queryFn: () => getQuotesByAuthorId({ page: page - 1, aid }),
    enabled: !!page,
  });

  const prevPage = quotes?.firstPage ? page : page - 1;
  const nextPage = quotes?.lastPage ? page : page + 1;
  const lastPage = quotes?.totalPages;

  useQuery({
    queryKey: ["getQuotesByAuthorId", prevPage - 1, aid],

    queryFn: () =>
      getQuotesByAuthorId({
        page: prevPage - 1,
        aid,
      }),

    enabled: !!prevPage,
  });

  useQuery({
    queryKey: ["getQuotesByAuthorId", nextPage - 1, aid],

    queryFn: () =>
      getQuotesByAuthorId({
        page: nextPage - 1,
        aid,
      }),

    enabled: !!nextPage,
  });

  useQuery({
    queryKey: ["getQuotesByAuthorId", lastPage - 1, aid],

    queryFn: () =>
      getQuotesByAuthorId({
        page: lastPage - 1,
        aid,
      }),

    enabled: !!lastPage,
  });

  return { quotes, isPending, isError, error };
};
