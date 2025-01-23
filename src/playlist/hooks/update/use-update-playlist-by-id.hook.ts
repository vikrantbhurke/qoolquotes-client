import { updatePlaylistById } from "@/playlist/playlist.network";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { useNavigate } from "react-router-dom";
import { NotificationColor } from "@/global/enums";

export const useUpdatePlaylistById = () => {
  const { showNotification } = useNotification();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updatePlaylistByIdMutation, isPending } = useMutation({
    mutationFn: updatePlaylistById,

    onMutate: async ({ pid, name, description, access }: any) => {
      await queryClient.cancelQueries({
        queryKey: ["getPlaylistById", pid],
      });

      const previousPlaylist = await queryClient.getQueryData([
        "getPlaylistById",
        pid,
      ]);

      await queryClient.setQueryData(
        ["getPlaylistById", pid],
        (playlist: any) => {
          return {
            ...playlist,
            name,
            description,
            access,
          };
        }
      );

      return { previousPlaylist };
    },

    onSuccess: async (_data: any, { pid }: any) => {
      navigate(`/playlists/${pid}`);

      showNotification(`Playlist updated.`, NotificationColor.Success);

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

    onError: async (error: any, { pid }: any, context: any) => {
      showNotification(
        error?.response?.data?.message || error.message,
        NotificationColor.Failure
      );

      await queryClient.setQueryData(
        ["getPlaylistById", pid],
        context.previousPlaylist
      );
    },
  });

  return { updatePlaylistByIdMutation, isPending };
};
