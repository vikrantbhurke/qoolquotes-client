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

    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: ["getPlaylistsBySaverId"],
      });

      const previousPlaylists = queryClient.getQueryData([
        "getPlaylistsBySaverId",
      ]);

      queryClient.setQueryData(["getPlaylistsBySaverId"], null);

      return { previousPlaylists };
    },

    onSuccess: async (_data: any) => {
      showNotification(`Playlists removed.`, NotificationColor.Success);

      await queryClient.invalidateQueries({
        queryKey: ["getPlaylistsBySaverId"],
      });
    },

    onError: async (error: AxiosError, _variables: any, context: any) => {
      showNotification(error.message, NotificationColor.Failure);

      if (context?.previousPlaylists) {
        queryClient.setQueryData(
          ["getPlaylistsBySaverId"],
          context.previousPlaylists
        );
      }
    },
  });

  return { removePlaylistsBySaverIdMutation, isPending };
};
