import { checkPlaylistSaver } from "@/playlist-saver/playlist-saver.network";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useCheckPlaylistSaver = ({ pid }: any) => {
  const { auth } = useSelector((state: any) => state.auth);

  const {
    data: playlistSaver,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["checkPlaylistSaver", pid, auth.id],
    queryFn: () => checkPlaylistSaver({ pid, sid: auth.id }),
    enabled: !!auth.id && !!pid,
  });

  return { playlistSaver, isPending, isError, error };
};
