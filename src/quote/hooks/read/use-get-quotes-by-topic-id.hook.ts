import { useQuery } from "@tanstack/react-query";
import { getQuotesByTopicId } from "@/quote/quote.network";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const useGetQuotesByTopicId = () => {
  const location = useLocation();
  const tid = location.state.tid;
  const { page } = useSelector((state: RootState) => state.quote);

  const {
    data: quotes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getQuotesByTopicId", page - 1, tid],

    queryFn: () => getQuotesByTopicId({ page: page - 1, tid }),
    enabled: !!page,
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

    enabled: !!prevPage,
  });

  useQuery({
    queryKey: ["getQuotesByTopicId", nextPage - 1, tid],

    queryFn: () =>
      getQuotesByTopicId({
        page: nextPage - 1,
        tid,
      }),

    enabled: !!nextPage,
  });

  useQuery({
    queryKey: ["getQuotesByTopicId", lastPage - 1, tid],

    queryFn: () =>
      getQuotesByTopicId({
        page: lastPage - 1,
        tid,
      }),

    enabled: !!lastPage,
  });

  return { quotes, isPending, isError, error };
};
