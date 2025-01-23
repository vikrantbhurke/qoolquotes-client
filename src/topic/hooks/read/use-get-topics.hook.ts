import { useQuery } from "@tanstack/react-query";
import { getTopics } from "@/topic/topic.network";
import { Order } from "@/global/enums";
import { useSearchParams } from "react-router-dom";

export const useGetTopics = () => {
  let [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const sort = searchParams.get("sort") as string;
  const order = searchParams.get("order") as Order;
  const alpha = searchParams.get("alpha") as string;

  const getTopicsDTO = {
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
    queryKey: ["getTopics", page - 1, ...Object.values(getTopicsDTO)],
    queryFn: () => getTopics({ page: page - 1, ...getTopicsDTO }),
  });

  const prevPage = topics?.firstPage ? page : page - 1;
  const nextPage = topics?.lastPage ? page : page + 1;
  const lastPage = topics?.totalPages;

  useQuery({
    queryKey: ["getTopics", prevPage - 1, ...Object.values(getTopicsDTO)],

    queryFn: () =>
      getTopics({
        page: prevPage - 1,
        ...getTopicsDTO,
      }),

    enabled: !!prevPage,
  });

  useQuery({
    queryKey: ["getTopics", nextPage - 1, ...Object.values(getTopicsDTO)],

    queryFn: () =>
      getTopics({
        page: nextPage - 1,
        ...getTopicsDTO,
      }),

    enabled: !!nextPage,
  });

  useQuery({
    queryKey: ["getTopics", lastPage - 1, ...Object.values(getTopicsDTO)],

    queryFn: () =>
      getTopics({
        page: lastPage - 1,
        ...getTopicsDTO,
      }),

    enabled: !!lastPage,
  });

  return { topics, isPending, isError, error };
};
