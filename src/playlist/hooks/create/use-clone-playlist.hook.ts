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
      const { message }: any = error?.response?.data;
      if (message) showNotification(message, NotificationColor.Warning);
      else
        showNotification(
          error?.response?.data?.message || error.message,
          NotificationColor.Failure
        );
    },
  });

  return { clonePlaylistMutation, isPending };
};
