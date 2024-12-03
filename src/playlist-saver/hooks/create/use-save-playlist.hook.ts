import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { savePlaylist } from "@/playlist-saver/playlist-saver.network";
import { NotificationColor } from "@/global/enums";
import { AxiosError } from "axios";

export const useSavePlaylist = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { mutate: savePlaylistMutation, isPending } = useMutation({
    mutationFn: savePlaylist,

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
        exists: true,
      });

      return {
        previousCheckPlaylistSaver,
      };
    },

    onSuccess: async (_data: any, { pid, sid }: any) => {
      showNotification(`Playlist saved.`, NotificationColor.Success);

      await queryClient.invalidateQueries({
        queryKey: ["checkPlaylistSaver", pid, sid],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getPlaylistsBySaverId"],
      });
    },

    onError: (error: AxiosError, { pid, sid }: any, context: any) => {
      const { message }: any = error?.response?.data;
      if (message) showNotification(message, NotificationColor.Warning);
      else showNotification(error.message, NotificationColor.Failure);

      queryClient.setQueryData(
        ["checkPlaylistSaver", pid, sid],
        context.previousCheckPlaylistSaver
      );
    },
  });

  return { savePlaylistMutation, isPending };
};
