import { useQuery } from "@tanstack/react-query";
import { getQuotesByTopicId } from "@/quote/quote.network";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { useSearchParams } from "react-router-dom";

export const useGetQuotesByTopicId = () => {
  let [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const { filterObject } = useSelector((state: RootState) => state.quote);
  const { id: tid } = filterObject;

  const {
    data: quotes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getQuotesByTopicId", page - 1, tid],
    queryFn: () => getQuotesByTopicId({ page: page - 1, tid }),
    enabled: !!tid,
  });

  const prevPage = quotes?.firstPage ? page : page - 1;
  const nextPage = quotes?.lastPage ? page : page + 1;
  const lastPage = quotes?.totalPages;

  useQuery({
    queryKey: ["getQuotesByTopicId", prevPage - 1, tid],

    queryFn: () =>
      getQuotesByTopicId({
        page: prevPage - 1,
        tid,
      }),

    enabled: !!prevPage && !!tid,
  });

  useQuery({
    queryKey: ["getQuotesByTopicId", nextPage - 1, tid],

    queryFn: () =>
      getQuotesByTopicId({
        page: nextPage - 1,
        tid,
      }),

    enabled: !!nextPage && !!tid,
  });

  useQuery({
    queryKey: ["getQuotesByTopicId", lastPage - 1, tid],

    queryFn: () =>
      getQuotesByTopicId({
        page: lastPage - 1,
        tid,
      }),

    enabled: !!lastPage && !!tid,
  });

  return { quotes, isPending, isError, error };
};
