import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { createSubscription } from "../../paypal.network";
import { NotificationColor } from "@/global/enums";

export const useCreateSubscription = () => {
  const { showNotification } = useNotification();

  const { mutate: createSubscriptionMutation, isPending } = useMutation({
    mutationFn: createSubscription,

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

  return { createSubscriptionMutation, isPending };
};
