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

    onError: (error: any) => {
      showNotification(
        error?.response?.data?.message || error.message || "An error occurred",
        NotificationColor.Failure
      );
    },
  });

  return { createPlaylistMutation, isPending };
};
