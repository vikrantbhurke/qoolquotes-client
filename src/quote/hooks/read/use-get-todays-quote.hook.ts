import { getTodaysQuote } from "@/quote/quote.network";
import { useQuery } from "@tanstack/react-query";

export const useGetTodaysQuote = () => {
  const {
    data: quote,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["getTodaysQuote"],
    queryFn: () => getTodaysQuote(),
    refetchInterval: 86400000,
    staleTime: 0,
    refetchOnWindowFocus: "always",
  });

  return {
    quote,
    isPending,
    isError,
    error,
    refetch,
  };
};
