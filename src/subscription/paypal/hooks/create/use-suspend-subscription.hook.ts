import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { suspendSubscription } from "../../paypal.network";
import { NotificationColor } from "@/global/enums";
import { useGetSubscription } from "../read";
import { useDispatch } from "react-redux";
import { resetColor, resetFont } from "@/global/states/view.slice";

export const useSuspendSubscription = () => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const { refetchSubscription } = useGetSubscription();

  const {
    mutate: suspendSubscriptionMutation,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: suspendSubscription,

    onSuccess: async (data: any, _variables: any, _context: any) => {
      showNotification(data?.message, NotificationColor.Success);
      await refetchSubscription();
      dispatch(resetColor());
      dispatch(resetFont());
    },

    onError: (error: any) => {
      showNotification(
        error?.response?.data?.message || error.message || "An error occurred",
        NotificationColor.Failure
      );
    },
  });

  return { suspendSubscriptionMutation, isPending, isSuccess };
};
