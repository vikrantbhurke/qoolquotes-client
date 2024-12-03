import { AxiosError } from "axios";
import { deletePlaylistById } from "@/playlist/playlist.network";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { setPage, setTab } from "@/playlist/playlist.slice";
import { useDispatch } from "react-redux";
import { NotificationColor } from "@/global/enums";

export const useDeletePlaylistById = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const queryClient = useQueryClient();
  const { auth } = useSelector((state: RootState) => state.auth);

  const { mutate: deletePlaylistByIdMutation, isPending } = useMutation({
    mutationFn: deletePlaylistById,

    onMutate: async (pid) => {
      await queryClient.cancelQueries({
        queryKey: ["getPlaylistById", pid],
      });

      const previousPlaylist = await queryClient.getQueryData([
        "getPlaylistById",
        pid,
      ]);

      await queryClient.setQueryData(["getPlaylistById", pid], null);

      return { previousPlaylist };
    },

    onSuccess: async (_data: any, pid) => {
      navigate(`/playlists/creatorId/${auth.id}?page=1`);
      dispatch(setTab("Created"));
      dispatch(setPage(1));
      showNotification(`Playlist deleted.`, NotificationColor.Success);

      await queryClient.invalidateQueries({
        queryKey: ["getPlaylistById", pid],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getPlaylists"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["searchPlaylists"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getPlaylistsByCreatorId"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getPlaylistsBySaverId"],
      });
    },

    onError: async (error: AxiosError, pid: any, context: any) => {
      showNotification(error.message, NotificationColor.Failure);

      await queryClient.setQueryData(
        ["getPlaylistById", pid],
        context.previousPlaylist
      );
    },
  });

  return { deletePlaylistByIdMutation, isPending };
};
