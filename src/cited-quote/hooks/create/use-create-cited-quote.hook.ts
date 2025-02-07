import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { createCitedQuote } from "@/cited-quote/cited-quote.network";
import { NotificationColor } from "@/global/enums";

export const useCreateCitedQuote = () => {
  const { showNotification } = useNotification();

  const { mutate: createCitedQuoteMutation, isPending } = useMutation({
    mutationFn: createCitedQuote,

    onSuccess: async () => {
      showNotification("Quote sent.", NotificationColor.Info);
    },

    onError: (error: any) => {
      showNotification(
        error?.response?.data?.message || error.message || "An error occurred",
        NotificationColor.Failure
      );
    },
  });

  return { createCitedQuoteMutation, isPending };
};
