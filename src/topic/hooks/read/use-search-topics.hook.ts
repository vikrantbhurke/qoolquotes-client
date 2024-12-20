import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/global/states/store";
import { searchTopics } from "@/topic/topic.network";

export const useSearchTopics = () => {
  const { search } = useSelector((state: RootState) => state.view);
  const { sort, order, page, alpha } = useSelector(
    (state: RootState) => state.topic
  );

  const searchTopicsDTO = {
    search,
    sort,
    order,
    alpha,
  };

  const {
    data: topics,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["searchTopics", page - 1, ...Object.values(searchTopicsDTO)],

    queryFn: () => searchTopics({ page: page - 1, ...searchTopicsDTO }),
    enabled: !!page,
  });

  const prevPage = topics?.firstPage ? page : page - 1;
  const nextPage = topics?.lastPage ? page : page + 1;
  const lastPage = topics?.totalPages;

  useQuery({
    queryKey: ["searchTopics", prevPage - 1, ...Object.values(searchTopicsDTO)],

    queryFn: () =>
      searchTopics({
        page: prevPage - 1,
        ...searchTopicsDTO,
      }),

    enabled: !!prevPage,
  });

  useQuery({
    queryKey: ["searchTopics", nextPage - 1, ...Object.values(searchTopicsDTO)],

    queryFn: () =>
      searchTopics({
        page: nextPage - 1,
        ...searchTopicsDTO,
      }),

    enabled: !!nextPage,
  });

  useQuery({
    queryKey: ["searchTopics", lastPage - 1, ...Object.values(searchTopicsDTO)],

    queryFn: () =>
      searchTopics({
        page: lastPage - 1,
        ...searchTopicsDTO,
      }),

    enabled: !!lastPage,
  });

  return { topics, isPending, isError, error };
};
