import { countQuoteLikes } from "@/quote-liker/quote-liker.network";
import { useQuery } from "@tanstack/react-query";

export const useCountQuoteLikes = (qid: string) => {
  const {
    data: quoteLikes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["countQuoteLikes", qid],
    queryFn: () => countQuoteLikes(qid),
    enabled: !!qid,
  });

  return { quoteLikes, isPending, isError, error };
};
