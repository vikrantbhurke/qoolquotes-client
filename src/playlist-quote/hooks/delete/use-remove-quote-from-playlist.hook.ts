import { NotificationColor } from "@/global/enums";
import { useNotification } from "@/global/hooks";
import { removeQuoteFromPlaylist } from "@/playlist-quote/playlist-quote.network";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useRemoveQuoteFromPlaylist = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { mutate: removeQuoteFromPlaylistMutation, isPending } = useMutation({
    mutationFn: removeQuoteFromPlaylist,

    onMutate: async ({ pid, qid }: any) => {
      await queryClient.cancelQueries({
        queryKey: ["checkPlaylistQuote", pid, qid],
      });

      await queryClient.cancelQueries({
        queryKey: ["countPlaylistQuotes", pid],
      });

      const previousCheckPlaylistQuote = queryClient.getQueryData([
        "checkPlaylistQuote",
        pid,
        qid,
      ]);

      const previousCountPlaylistQuotes: any = queryClient.getQueryData([
        "countPlaylistQuotes",
        pid,
      ]);

      queryClient.setQueryData(["checkPlaylistQuote", pid, qid], {
        exists: false,
      });

      queryClient.setQueryData(["countPlaylistQuotes", pid], {
        count: previousCountPlaylistQuotes.count - 1,
      });

      return {
        previousData: {
          previousCheckPlaylistQuote,
          previousCountPlaylistQuotes,
        },
      };
    },

    onSuccess: async (_data: any, { pid, qid }: any) => {
      await queryClient.invalidateQueries({
        queryKey: ["checkPlaylistQuote", pid, qid],
      });

      await queryClient.invalidateQueries({
        queryKey: ["countPlaylistQuotes", pid],
      });
    },

    onError: async (error: AxiosError, { pid, qid }: any, context: any) => {
      showNotification(error.message, NotificationColor.Failure);

      queryClient.setQueryData(
        ["checkPlaylistQuote", pid, qid],
        context.previousData.previousCheckPlaylistQuote
      );

      queryClient.setQueryData(
        ["countPlaylistQuotes", pid],
        context.previousData.previousCountPlaylistQuotes
      );
    },
  });

  return { removeQuoteFromPlaylistMutation, isPending };
};
