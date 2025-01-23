import { useQuery } from "@tanstack/react-query";
import { getAuthors } from "@/author/author.network";
import { Order } from "@/global/enums";
import { useSearchParams } from "react-router-dom";

export const useGetAuthors = () => {
  let [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const sort = searchParams.get("sort") as string;
  const order = searchParams.get("order") as Order;
  const alpha = searchParams.get("alpha") as string;

  const getAuthorsDTO = {
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
    queryKey: ["getAuthors", page - 1, ...Object.values(getAuthorsDTO)],
    queryFn: () => getAuthors({ page: page - 1, ...getAuthorsDTO }),
  });

  const prevPage = authors?.firstPage ? page : page - 1;
  const nextPage = authors?.lastPage ? page : page + 1;
  const lastPage = authors?.totalPages;

  useQuery({
    queryKey: ["getAuthors", prevPage - 1, ...Object.values(getAuthorsDTO)],

    queryFn: () =>
      getAuthors({
        page: prevPage - 1,
        ...getAuthorsDTO,
      }),

    enabled: !!prevPage,
  });

  useQuery({
    queryKey: ["getAuthors", nextPage - 1, ...Object.values(getAuthorsDTO)],

    queryFn: () =>
      getAuthors({
        page: nextPage - 1,
        ...getAuthorsDTO,
      }),

    enabled: !!nextPage,
  });

  useQuery({
    queryKey: ["getAuthors", lastPage - 1, ...Object.values(getAuthorsDTO)],

    queryFn: () =>
      getAuthors({
        page: lastPage - 1,
        ...getAuthorsDTO,
      }),

    enabled: !!lastPage,
  });

  return { authors, isPending, isError, error };
};
