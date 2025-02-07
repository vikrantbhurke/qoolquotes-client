import { NotificationColor } from "@/global/enums";
import { useNotification } from "@/global/hooks";
import { removeQuoteFromPlaylist } from "@/playlist-quote/playlist-quote.network";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRemoveQuoteFromPlaylist = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { mutate: removeQuoteFromPlaylistMutation, isPending } = useMutation({
    mutationFn: removeQuoteFromPlaylist,

    onMutate: async ({ pid, qid }: any) => {
      await queryClient.cancelQueries({
        queryKey: ["checkPlaylistQuote", pid, qid],
      });

      const previousCheckPlaylistQuote = queryClient.getQueryData([
        "checkPlaylistQuote",
        pid,
        qid,
      ]);

      queryClient.setQueryData(["checkPlaylistQuote", pid, qid], {
        exists: false,
      });

      return {
        previousCheckPlaylistQuote,
      };
    },

    onSuccess: async (_data: any, { pid, qid }: any) => {
      await queryClient.invalidateQueries({
        queryKey: ["checkPlaylistQuote", pid, qid],
      });

      await queryClient.invalidateQueries({
        queryKey: ["countPlaylistQuotes", pid],
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

    onError: async (error: any, { pid, qid }: any, context: any) => {
      showNotification(
        error?.response?.data?.message || error.message || "An error occurred",
        NotificationColor.Failure
      );

      queryClient.setQueryData(
        ["checkPlaylistQuote", pid, qid],
        context.previousCheckPlaylistQuote
      );
    },
  });

  return { removeQuoteFromPlaylistMutation, isPending };
};
