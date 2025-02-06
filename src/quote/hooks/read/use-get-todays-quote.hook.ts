import { getTodaysQuote } from "@/quote/quote.network";
import { quoteUtility } from "@/quote/quote.utility";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

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

  useEffect(() => {
    const timeUntilNextUpdate = quoteUtility.getNextUpdateTime();

    const timer = setTimeout(() => {
      refetch();
    }, timeUntilNextUpdate);

    return () => clearTimeout(timer);
  }, [refetch]);

  return {
    quote,
    isPending,
    isError,
    error,
    timeOfDay: quoteUtility.getTimeOfDay(),
  };
};
