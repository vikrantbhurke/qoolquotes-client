import { countAuthorQuotes } from "@/author/author.network";
import { useQuery } from "@tanstack/react-query";

export const useCountAuthorQuotes = (aid: string) => {
  const {
    data: authorQuotes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["countAuthorQuotes", aid],
    queryFn: () => countAuthorQuotes(aid),
  });

  return { authorQuotes, isPending, isError, error };
};
