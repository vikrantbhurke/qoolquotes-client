import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/global/states/store";
import { searchAuthors } from "@/author/author.network";

export const useSearchAuthors = () => {
  const { search } = useSelector((state: RootState) => state.view);
  const { sort, order, page } = useSelector((state: RootState) => state.author);

  const searchAuthorsDTO = {
    search,
    sort,
    order,
  };

  const {
    data: authors,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["searchAuthors", page - 1, ...Object.values(searchAuthorsDTO)],

    queryFn: () => searchAuthors({ page: page - 1, ...searchAuthorsDTO }),
    enabled: !!page,
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

    enabled: !!prevPage,
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

    enabled: !!nextPage,
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

    enabled: !!lastPage,
  });

  return { authors, isPending, isError, error };
};
