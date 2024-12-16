import { NotificationColor } from "@/global/enums";
import { useNotification } from "@/global/hooks";
import { likePlaylist } from "@/playlist-liker/playlist-liker.network";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useLikePlaylist = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { mutate: likePlaylistMutation, isPending } = useMutation({
    mutationFn: likePlaylist,

    onMutate: async ({ pid, lid }: any) => {
      await queryClient.cancelQueries({
        queryKey: ["checkPlaylistLiker", pid, lid],
      });

      await queryClient.cancelQueries({
        queryKey: ["countPlaylistLikes", pid],
      });

      const previousCheckPlaylistLiker = queryClient.getQueryData([
        "checkPlaylistLiker",
        pid,
        lid,
      ]);

      const previousCountPlaylistLikes: any = queryClient.getQueryData([
        "countPlaylistLikes",
        pid,
      ]);

      queryClient.setQueryData(["checkPlaylistLiker", pid, lid], {
        exists: true,
      });

      queryClient.setQueryData(["countPlaylistLikes", pid], {
        count: previousCountPlaylistLikes.count + 1,
      });

      return {
        previousData: {
          previousCheckPlaylistLiker,
          previousCountPlaylistLikes,
        },
      };
    },

    onSuccess: async (_data: any, { pid, lid }: any) => {
      await queryClient.invalidateQueries({
        queryKey: ["checkPlaylistLiker", pid, lid],
      });

      await queryClient.invalidateQueries({
        queryKey: ["countPlaylistLikes", pid],
      });

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

    onError: async (error: AxiosError, { pid, lid }: any, context: any) => {
      showNotification(error.message, NotificationColor.Failure);

      queryClient.setQueryData(
        ["checkPlaylistLiker", pid, lid],
        context.previousData.previousCheckPlaylistLiker
      );

      queryClient.setQueryData(
        ["countPlaylistLikes", pid],
        context.previousData.previousCountPlaylistLikes
      );
    },
  });

  return { likePlaylistMutation, isPending };
};
