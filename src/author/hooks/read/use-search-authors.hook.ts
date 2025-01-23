import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/global/states/store";
import { searchAuthors } from "@/author/author.network";
import { Order } from "@/global/enums";
import { useSearchParams } from "react-router-dom";

export const useSearchAuthors = () => {
  const { search } = useSelector((state: RootState) => state.view);
  let [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const sort = searchParams.get("sort") as string;
  const order = searchParams.get("order") as Order;
  const alpha = searchParams.get("alpha") as string;

  const searchAuthorsDTO = {
    search,
    sort,
    order,
    alpha,
  };

  const {
    data: authors,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["searchAuthors", page - 1, ...Object.values(searchAuthorsDTO)],

    queryFn: () => searchAuthors({ page: page - 1, ...searchAuthorsDTO }),
    enabled: !!search,
  });

  const prevPage = authors?.firstPage ? page : page - 1;
  const nextPage = authors?.lastPage ? page : page + 1;
  const lastPage = authors?.totalPages;

  useQuery({
    queryKey: [
      "searchAuthors",
      prevPage - 1,
      ...Object.values(searchAuthorsDTO),
    ],

    queryFn: () =>
      searchAuthors({
        page: prevPage - 1,
        ...searchAuthorsDTO,
      }),

    enabled: !!prevPage && !!search,
  });

  useQuery({
    queryKey: [
      "searchAuthors",
      nextPage - 1,
      ...Object.values(searchAuthorsDTO),
    ],

    queryFn: () =>
      searchAuthors({
        page: nextPage - 1,
        ...searchAuthorsDTO,
      }),

    enabled: !!nextPage && !!search,
  });

  useQuery({
    queryKey: [
      "searchAuthors",
      lastPage - 1,
      ...Object.values(searchAuthorsDTO),
    ],

    queryFn: () =>
      searchAuthors({
        page: lastPage - 1,
        ...searchAuthorsDTO,
      }),

    enabled: !!lastPage && !!search,
  });

  return { authors, isPending, isError, error };
};
