import { useEffect, useState } from "react";
import { getRandomQuotes } from "@/quote/quote.network";

export const useGetRandomQuotes = () => {
  const [randomQuotes, setRandomQuotes] = useState<any[]>([]);
  const [totalElements, setTotalElements] = useState<number>(0);

  const fetchQuotes = async () => {
    const quotes = await getRandomQuotes();

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
