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

    onSuccess: async (_data: any, { pid, sid }: any) => {
      showNotification(`Playlist saved.`, NotificationColor.Success);

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

    onError: (error: AxiosError) => {
      const { message }: any = error?.response?.data;
      if (message) showNotification(message, NotificationColor.Warning);
      else showNotification(error.message, NotificationColor.Failure);
    },
  });

  return { savePlaylistMutation, isPending };
};
