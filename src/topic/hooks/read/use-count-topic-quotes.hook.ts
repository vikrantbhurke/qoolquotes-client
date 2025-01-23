import { countTopicQuotes } from "@/topic/topic.network";
import { useQuery } from "@tanstack/react-query";

export const useCountTopicQuotes = (tid: string) => {
  const {
    data: topicQuotes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["countTopicQuotes", tid],
    queryFn: () => countTopicQuotes(tid),
    enabled: !!tid,
  });

  return { topicQuotes, isPending, isError, error };
};
