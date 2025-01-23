import { getPlaylistById } from "@/playlist/playlist.network";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetPlaylistById = () => {
  let params = useParams();
  let { pid } = params;

  const {
    data: playlist,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getPlaylistById", pid],
    queryFn: () => getPlaylistById(pid),
    enabled: !!pid,
  });

  return { playlist, isPending, isError, error };
};
