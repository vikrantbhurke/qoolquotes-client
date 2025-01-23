import { checkPlaylistLiker } from "@/playlist-liker/playlist-liker.network";
import { useQuery } from "@tanstack/react-query";

export const useCheckPlaylistLiker = ({ pid, lid }: any) => {
  const {
    data: playlistLiker,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["checkPlaylistLiker", pid, lid],
    queryFn: () => checkPlaylistLiker({ pid, lid }),
    enabled: !!pid && !!lid,
  });

  return { playlistLiker, isPending, isError, error };
};
