import { getQuotesByAuthorId } from "@/quote/quote.network";

export const useGetQuotesByAuthorIdGrid = () => {
  const quotes = getQuotesByAuthorId();
  return { quotes };
};
