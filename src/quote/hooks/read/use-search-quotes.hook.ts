import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/global/states/store";
import { searchQuotes } from "@/quote/quote.network";
import { useSearchParams } from "react-router-dom";

export const useSearchQuotes = () => {
  let [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const { search } = useSelector((state: RootState) => state.view);

  const {
    data: quotes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["searchQuotes", page - 1, search],
    queryFn: () => searchQuotes({ page: page - 1, search }),
    enabled: !!search,
  });

  const prevPage = quotes?.firstPage ? page : page - 1;
  const nextPage = quotes?.lastPage ? page : page + 1;
  const lastPage = quotes?.totalPages;

  useQuery({
    queryKey: ["searchQuotes", prevPage - 1, search],

    queryFn: () =>
      searchQuotes({
        page: prevPage - 1,
        search,
      }),

    enabled: !!prevPage && !!search,
  });

  useQuery({
    queryKey: ["searchQuotes", nextPage - 1, search],

    queryFn: () =>
      searchQuotes({
        page: nextPage - 1,
        search,
      }),

    enabled: !!nextPage && !!search,
  });

  useQuery({
    queryKey: ["searchQuotes", lastPage - 1, search],

    queryFn: () =>
      searchQuotes({
        page: lastPage - 1,
        search,
      }),

    enabled: !!lastPage && !!search,
  });

  return { quotes, isPending, isError, error };
};
