import { useQuery } from "@tanstack/react-query";
import { getQuotesByAuthorId } from "@/quote/quote.network";
import { RootState } from "@/global/states/store";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export const useGetQuotesByAuthorId = () => {
  let [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const { filterObject } = useSelector((state: RootState) => state.quote);
  const { id: aid } = filterObject;

  const {
    data: quotes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getQuotesByAuthorId", page - 1, aid],
    queryFn: () => getQuotesByAuthorId({ page: page - 1, aid }),
    enabled: !!aid,
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
