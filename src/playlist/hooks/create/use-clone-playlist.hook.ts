import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { clonePlaylist } from "@/playlist/playlist.network";
import { NotificationColor } from "@/global/enums";

export const useClonePlaylist = () => {
  const { showNotification } = useNotification();

  const { mutate: clonePlaylistMutation, isPending } = useMutation({
    mutationFn: clonePlaylist,

    onSuccess: async () => {
      showNotification(`Playlist cloned.`, NotificationColor.Success);
    },

    onError: (error: any) => {
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

  return { clonePlaylistMutation, isPending };
};
