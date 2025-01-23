import { checkPlaylistQuote } from "@/playlist-quote/playlist-quote.network";
import { useQuery } from "@tanstack/react-query";

export const useCheckPlaylistQuote = ({ pid, qid }: any) => {
  const {
    data: playlistQuote,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["checkPlaylistQuote", pid, qid],
    queryFn: () => checkPlaylistQuote({ pid, qid }),
    enabled: !!pid && !!qid,
  });

  return { playlistQuote, isPending, isError, error };
};
