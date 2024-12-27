import { useEffect, useState } from "react";
import { getRandomQuotes } from "@/quote/quote.network";
import { useSelector } from "react-redux";

export const useGetRandomQuotes = () => {
  const [randomQuotes, setRandomQuotes] = useState<any[]>([]);
  const [totalElements, setTotalElements] = useState<number>(0);
  const { isMobile } = useSelector((state: any) => state.view);

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
