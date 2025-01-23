import { useNotification } from "@/global/hooks";
import { removePlaylistsBySaverId } from "@/playlist-saver/playlist-saver.network";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NotificationColor } from "@/global/enums";

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

    onError: async (error: any, _variables: any) => {
      let cvm = error?.response?.data?.message;
      let cvc = Object.values(error?.response?.data?.errors[0]?.constraints)[0];
      let errorMessage;

      if (cvm === process.env.CLASS_VALIDATOR_ERROR) errorMessage = cvc;

      showNotification(
        errorMessage || error.message,
        NotificationColor.Failure
      );
    },
  });

  return { removePlaylistsBySaverIdMutation, isPending };
};
