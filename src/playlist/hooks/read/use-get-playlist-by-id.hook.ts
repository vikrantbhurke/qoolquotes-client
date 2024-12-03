import { getPlaylistById } from "@/playlist/playlist.network";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetPlaylistById = () => {
  let { pid } = useParams();

  const {
    data: playlist,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getPlaylistById", pid],
    queryFn: () => getPlaylistById(pid),
  });

  return { playlist, isPending, isError, error };
};
