import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/global/states/store";
import { searchQuotes } from "@/quote/quote.network";

export const useSearchQuotes = () => {
  const { search } = useSelector((state: RootState) => state.view);
  const { page } = useSelector((state: RootState) => state.quote);

  const {
    data: quotes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["searchQuotes", page - 1, search],

    queryFn: () => searchQuotes({ page: page - 1, search }),
    enabled: !!page,
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

    enabled: !!prevPage,
  });

  useQuery({
    queryKey: ["searchQuotes", nextPage - 1, search],

    queryFn: () =>
      searchQuotes({
        page: nextPage - 1,
        search,
      }),

    enabled: !!nextPage,
  });

  useQuery({
    queryKey: ["searchQuotes", lastPage - 1, search],

    queryFn: () =>
      searchQuotes({
        page: lastPage - 1,
        search,
      }),

    enabled: !!lastPage,
  });

  return { quotes, isPending, isError, error };
};
