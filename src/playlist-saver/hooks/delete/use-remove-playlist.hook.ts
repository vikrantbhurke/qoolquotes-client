import { useNotification } from "@/global/hooks";
import { removePlaylist } from "@/playlist-saver/playlist-saver.network";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NotificationColor } from "@/global/enums";

export const useRemovePlaylist = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { mutate: removePlaylistMutation, isPending } = useMutation({
    mutationFn: removePlaylist,

    onSuccess: async (_data: any, { pid, sid }: any) => {
      showNotification(`Playlist removed.`, NotificationColor.Success);

      await queryClient.invalidateQueries({
        queryKey: ["checkPlaylistSaver", pid, sid],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getPlaylistById", pid],
      });

      await queryClient.invalidateQueries({
        queryKey: ["searchPlaylists"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getPlaylists"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getPlaylistsByCreatorId"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getPlaylistsBySaverId"],
      });
    },

    onError: async (error: any) => {
      showNotification(
        error?.response?.data?.message || error.message,
        NotificationColor.Failure
      );
    },
  });

  return { removePlaylistMutation, isPending };
};
