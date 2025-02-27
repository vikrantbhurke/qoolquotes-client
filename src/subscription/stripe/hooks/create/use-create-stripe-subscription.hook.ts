import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { createStripeSubscription } from "../../stripe.network";
import { NotificationColor } from "@/global/enums";

export const useCreateStripeSubscription = () => {
  const { showNotification } = useNotification();

  const { mutate: createStripeSubscriptionMutation, isPending } = useMutation({
    mutationFn: createStripeSubscription,

    onSuccess: async (data: any, _variables: any, _context: any) => {
      if (data.approve_url) window.open(data.approve_url, "_self");
    },

    onError: (error: any) => {
      showNotification(
        error?.response?.data?.message || error.message || "An error occurred",
        NotificationColor.Failure
      );
    },
  });

  return { createStripeSubscriptionMutation, isPending };
};
