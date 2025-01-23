import { NotificationColor } from "@/global/enums";
import { useNotification } from "@/global/hooks";
import { unlikeQuote } from "@/quote-liker/quote-liker.network";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUnlikeQuote = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { mutate: unlikeQuoteMutation, isPending } = useMutation({
    mutationFn: unlikeQuote,

    onMutate: async ({ qid, lid }: any) => {
      await queryClient.cancelQueries({
        queryKey: ["checkQuoteLiker", qid, lid],
      });

      await queryClient.cancelQueries({
        queryKey: ["countQuoteLikes", qid],
      });

      const previousCheckQuoteLiker = queryClient.getQueryData([
        "checkQuoteLiker",
        qid,
        lid,
      ]);

      const previousCountQuoteLikes: any = queryClient.getQueryData([
        "countQuoteLikes",
        qid,
      ]);

      queryClient.setQueryData(["checkQuoteLiker", qid, lid], {
        exists: false,
      });

      queryClient.setQueryData(["countQuoteLikes", qid], {
        count: previousCountQuoteLikes.count - 1,
      });

      return {
        previousData: { previousCheckQuoteLiker, previousCountQuoteLikes },
      };
    },

    onSuccess: async (_data: any, { qid, lid }: any) => {
      await queryClient.invalidateQueries({
        queryKey: ["checkQuoteLiker", qid, lid],
      });

      await queryClient.invalidateQueries({
        queryKey: ["countQuoteLikes", qid],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getQuoteById", qid],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getQuotesByAuthorId"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getQuotesByTopicId"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["getQuotesByPlaylistId"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["searchQuotes"],
      });
    },

    onError: async (error: any, { qid, lid }: any, context: any) => {
      let cvm = error?.response?.data?.message;
      let cvc = Object.values(error?.response?.data?.errors[0]?.constraints)[0];
      let errorMessage;

      if (cvm === process.env.CLASS_VALIDATOR_ERROR) errorMessage = cvc;

      showNotification(
        errorMessage || error.message,
        NotificationColor.Failure
      );

      queryClient.setQueryData(
        ["checkQuoteLiker", qid, lid],
        context.previousData.previousCheckQuoteLiker
      );

      queryClient.setQueryData(
        ["countQuoteLikes", qid],
        context.previousData.previousCountQuoteLikes
      );
    },
  });

  return { unlikeQuoteMutation, isPending };
};
