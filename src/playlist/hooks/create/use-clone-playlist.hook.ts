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
      showNotification(
        error?.response?.data?.message || error.message || "An error occurred",
        NotificationColor.Failure
      );
    },
  });

  return { clonePlaylistMutation, isPending };
};
