import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { cancelSubscription } from "../../paypal.network";
import { NotificationColor } from "@/global/enums";
import { useGetSubscription } from "../read";

export const useCancelSubscription = () => {
  const { showNotification } = useNotification();
  const { refetchSubscription } = useGetSubscription();

  const {
    mutate: cancelSubscriptionMutation,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: cancelSubscription,

    onSuccess: async (data: any, _variables: any, _context: any) => {
      showNotification(data?.message, NotificationColor.Success);
      await refetchSubscription();
    },

    onError: (error: any) => {
      showNotification(
        error?.response?.data?.message || error.message || "An error occurred",
        NotificationColor.Failure
      );
    },
  });

  return { cancelSubscriptionMutation, isPending, isSuccess };
};
