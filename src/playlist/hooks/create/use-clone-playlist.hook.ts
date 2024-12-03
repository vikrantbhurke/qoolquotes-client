import { AxiosError } from "axios";
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

    onError: (error: AxiosError) => {
      const { message }: any = error?.response?.data;
      if (message) showNotification(message, NotificationColor.Warning);
      else showNotification(error.message, NotificationColor.Failure);
    },
  });

  return { clonePlaylistMutation, isPending };
};
