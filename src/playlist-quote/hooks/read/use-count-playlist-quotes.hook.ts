import { countPlaylistQuotes } from "@/playlist-quote/playlist-quote.network";
import { useQuery } from "@tanstack/react-query";

export const useCountPlaylistQuotes = (pid: string) => {
  const {
    data: playlistQuotes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["countPlaylistQuotes", pid],
    queryFn: () => countPlaylistQuotes(pid),
  });

  return { playlistQuotes, isPending, isError, error };
};
