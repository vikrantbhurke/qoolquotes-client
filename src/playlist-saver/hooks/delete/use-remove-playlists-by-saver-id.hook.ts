import { useNotification } from "@/global/hooks";
import { removePlaylistsBySaverId } from "@/playlist-saver/playlist-saver.network";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NotificationColor } from "@/global/enums";
import { AxiosError } from "axios";

export const useRemovePlaylistsBySaverId = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { mutate: removePlaylistsBySaverIdMutation, isPending } = useMutation({
    mutationFn: removePlaylistsBySaverId,

    onSuccess: async (_data: any) => {
      showNotification(`Playlists removed.`, NotificationColor.Success);

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

    onError: async (error: AxiosError, _variables: any) => {
      showNotification(error.message, NotificationColor.Failure);
    },
  });

  return { removePlaylistsBySaverIdMutation, isPending };
};
