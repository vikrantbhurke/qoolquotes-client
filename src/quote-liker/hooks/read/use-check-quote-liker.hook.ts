import { checkQuoteLiker } from "@/quote-liker/quote-liker.network";
import { useQuery } from "@tanstack/react-query";

export const useCheckQuoteLiker = ({ qid, lid }: any) => {
  const {
    data: quoteLiker,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["checkQuoteLiker", qid, lid],
    queryFn: () => checkQuoteLiker({ qid, lid }),
  });

  return { quoteLiker, isPending, isError, error };
};
