import { NotificationColor } from "@/global/enums";
import { useNotification } from "@/global/hooks";
import { likeQuote } from "@/quote-liker/quote-liker.network";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useLikeQuote = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { mutate: likeQuoteMutation, isPending } = useMutation({
    mutationFn: likeQuote,

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
        exists: true,
      });

      queryClient.setQueryData(["countQuoteLikes", qid], {
        count: previousCountQuoteLikes.count + 1,
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
    },

    onError: async (error: AxiosError, { qid, lid }: any, context: any) => {
      showNotification(error.message, NotificationColor.Failure);

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

  return { likeQuoteMutation, isPending };
};
