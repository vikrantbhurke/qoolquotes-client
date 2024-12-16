import { NotificationColor } from "@/global/enums";
import { useNotification } from "@/global/hooks";
import { addQuoteToPlaylist } from "@/playlist-quote/playlist-quote.network";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useAddQuoteToPlaylist = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { mutate: addQuoteToPlaylistMutation, isPending } = useMutation({
    mutationFn: addQuoteToPlaylist,

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
        exists: true,
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

    onError: async (error: AxiosError, { pid, qid }: any, context: any) => {
      showNotification(error.message, NotificationColor.Failure);

      queryClient.setQueryData(
        ["checkPlaylistQuote", pid, qid],
        context.previousCheckPlaylistQuote
      );
    },
  });

  return { addQuoteToPlaylistMutation, isPending };
};
