import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/global/states/store";
import { getAuthors } from "@/author/author.network";

export const useGetAuthors = () => {
  const { sort, order, page, alpha } = useSelector(
    (state: RootState) => state.author
  );

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
    enabled: !!page,
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
