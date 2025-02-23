import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { cancelSubscription } from "../../paypal.network";
import { NotificationColor } from "@/global/enums";
import { useGetUserByUsername } from "@/user/hooks/read";
import { useDispatch } from "react-redux";
import { setRefresh } from "@/global/states/view.slice";

export const useCancelSubscription = () => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const { fetchUserByUsername } = useGetUserByUsername();

  const { mutate: cancelSubscriptionMutation, isPending } = useMutation({
    mutationFn: cancelSubscription,

    onSuccess: async (data: any, _variables: any, _context: any) => {
      showNotification(data?.message, NotificationColor.Success);
      await fetchUserByUsername();
      dispatch(setRefresh());
    },

    onError: (error: any) => {
      showNotification(
        error?.response?.data?.message || error.message || "An error occurred",
        NotificationColor.Failure
      );
    },
  });

  return { cancelSubscriptionMutation, isPending };
};
