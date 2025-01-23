import { countPlaylistLikes } from "@/playlist-liker/playlist-liker.network";
import { useQuery } from "@tanstack/react-query";

export const useCountPlaylistLikes = (pid: string) => {
  const {
    data: playlistLikes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["countPlaylistLikes", pid],
    queryFn: () => countPlaylistLikes(pid),
    enabled: !!pid,
  });

  return { playlistLikes, isPending, isError, error };
};
