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
      let cvm = error?.response?.data?.message;
      let cvc = Object.values(error?.response?.data?.errors[0]?.constraints)[0];
      let errorMessage;

      if (cvm === process.env.CLASS_VALIDATOR_ERROR) errorMessage = cvc;

      showNotification(
        errorMessage || error.message,
        NotificationColor.Failure
      );
    },
  });

  return { createCitedQuoteMutation, isPending };
};
