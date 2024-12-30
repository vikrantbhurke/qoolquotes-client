import { useEffect, useState } from "react";
import { getRandomQuotes } from "@/quote/quote.network";
import { useSelector } from "react-redux";

export const useGetRandomQuotes = () => {
  const { isMobile } = useSelector((state: any) => state.view);
  const [randomQuotes, setRandomQuotes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [isError, setIsError] = useState<any>(null);
  const [hasMore, setHasMore] = useState<any>(true);
  const [page, setPage] = useState(1);

  const fetchQuotes = async () => {
    setIsLoading(true);
    setIsError(null);
    try {
      const quotes = await getRandomQuotes(isMobile ? 10 : 15);

      setRandomQuotes((prevRandomQuotes: any) => [
        ...prevRandomQuotes,
        ...quotes.content,
      ]);

      setHasMore(quotes.content.length > 0); // Assume empty array means no more data
    } catch (err) {
      setIsError("Failed to fetch data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [page]);

  return {
    randomQuotes,
    isLoading,
    isError,
    hasMore,
    setPage,
  };
};
