import { getQuoteById } from "@/quote/quote.network";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetQuoteById = () => {
  let { qid } = useParams();

  const {
    data: quote,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getQuoteById", qid],
    queryFn: () => getQuoteById(qid),
  });

  return { quote, isPending, isError, error };
};
