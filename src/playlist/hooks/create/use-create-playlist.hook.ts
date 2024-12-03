import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { createPlaylist } from "@/playlist/playlist.network";
import { NotificationColor } from "@/global/enums";

export const useCreatePlaylist = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { mutate: createPlaylistMutation, isPending } = useMutation({
    mutationFn: createPlaylist,

    onSuccess: async () => {
      showNotification(`Playlist created.`, NotificationColor.Success);

      await queryClient.invalidateQueries({
        queryKey: ["getPlaylists"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["searchPlaylists"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getPlaylistsByCreatorId"],
      });
    },

    onError: (error: AxiosError) => {
      const { message }: any = error?.response?.data;
      if (message) showNotification(message, NotificationColor.Warning);
      else showNotification(error.message, NotificationColor.Failure);
    },
  });

  return { createPlaylistMutation, isPending };
};
