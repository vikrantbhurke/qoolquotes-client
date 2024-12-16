import { useEffect, useState } from "react";
import { getRandomQuotes } from "@/quote/quote.network";
import { useIsMobile } from "@/global/hooks";

export const useGetRandomQuotes = () => {
  const isMobile = useIsMobile();
  const [randomQuotes, setRandomQuotes] = useState<any[]>([]);
  const [totalElements, setTotalElements] = useState<number>(0);

  const fetchQuotes = async () => {
    const quotes = await getRandomQuotes(isMobile ? 10 : 15);

    setRandomQuotes((prevRandomQuotes: any) => [
      ...prevRandomQuotes,
      ...quotes.content,
    ]);

    setTotalElements(
      (prevTotalElements) => prevTotalElements + quotes.totalElements
    );
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return { randomQuotes, totalElements, fetchQuotes };
};
