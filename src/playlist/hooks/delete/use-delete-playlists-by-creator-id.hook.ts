import { useNotification } from "@/global/hooks";
import { deletePlaylistsByCreatorId } from "@/playlist/playlist.network";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NotificationColor } from "@/global/enums";

export const useDeletePlaylistsByCreatorId = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { mutate: deletePlaylistsByCreatorIdMutation, isPending } = useMutation(
    {
      mutationFn: deletePlaylistsByCreatorId,

      onMutate: async () => {
        await queryClient.cancelQueries({
          queryKey: ["getPlaylistsByCreatorId"],
        });

        const previousPlaylists = queryClient.getQueryData([
          "getPlaylistsByCreatorId",
        ]);

        queryClient.setQueryData(["getPlaylistsByCreatorId"], null);

        return { previousPlaylists };
      },

      onSuccess: async (_data: any) => {
        showNotification(`Playlists deleted.`, NotificationColor.Success);

        await queryClient.invalidateQueries({
          queryKey: ["getPlaylistById"],
        });

        await queryClient.invalidateQueries({
          queryKey: ["getPlaylists"],
        });

        await queryClient.invalidateQueries({
          queryKey: ["searchPlaylists"],
        });

        await queryClient.invalidateQueries({
          queryKey: ["getPlaylistsByCreatorId"],
        });

        await queryClient.invalidateQueries({
          queryKey: ["getPlaylistsBySaverId"],
        });
      },

      onError: async (error: any, _variables: any, context: any) => {
        showNotification(
          error?.response?.data?.message || error.message,
          NotificationColor.Failure
        );

        if (context?.previousPlaylists) {
          queryClient.setQueryData(
            ["getPlaylistsByCreatorId"],
            context.previousPlaylists
          );
        }
      },
    }
  );

  return { deletePlaylistsByCreatorIdMutation, isPending };
};
