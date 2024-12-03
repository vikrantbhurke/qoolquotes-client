import { useNotification } from "@/global/hooks";
import { removePlaylist } from "@/playlist-saver/playlist-saver.network";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NotificationColor } from "@/global/enums";
import { AxiosError } from "axios";

export const useRemovePlaylist = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { mutate: removePlaylistMutation, isPending } = useMutation({
    mutationFn: removePlaylist,

    onMutate: async ({ pid, sid }: any) => {
      await queryClient.cancelQueries({
        queryKey: ["checkPlaylistSaver", pid, sid],
      });

      const previousCheckPlaylistSaver = queryClient.getQueryData([
        "checkPlaylistSaver",
        pid,
        sid,
      ]);

      queryClient.setQueryData(["checkPlaylistSaver", pid, sid], {
        exists: false,
      });

      return {
        previousCheckPlaylistSaver,
      };
    },

    onSuccess: async (_data: any, { pid, sid }: any) => {
      showNotification(`Playlist removed.`, NotificationColor.Success);

      await queryClient.invalidateQueries({
        queryKey: ["checkPlaylistSaver", pid, sid],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getPlaylistsBySaverId"],
      });
    },

    onError: async (error: AxiosError, { pid, sid }: any, context: any) => {
      showNotification(error.message, NotificationColor.Failure);

      queryClient.setQueryData(
        ["checkPlaylistSaver", pid, sid],
        context.previousCheckPlaylistSaver
      );
    },
  });

  return { removePlaylistMutation, isPending };
};
