import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { cancelSubscription } from "../../paypal.network";
import { NotificationColor } from "@/global/enums";
import { useGetSubscription } from "../read";
import { useDispatch } from "react-redux";
import { resetColor, resetFont } from "@/global/states/view.slice";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { setAuth } from "@/user/auth.slice";
import { Role } from "@/user/enums";

export const useCancelSubscription = () => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const { refetchSubscription } = useGetSubscription();
  const { auth } = useSelector((state: RootState) => state.auth);

  const {
    mutate: cancelSubscriptionMutation,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: cancelSubscription,

    onSuccess: async (data: any, _variables: any, _context: any) => {
      showNotification(data?.message, NotificationColor.Success);
      await refetchSubscription();
      dispatch(setAuth({ ...auth, role: Role.Private }));
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

  return { cancelSubscriptionMutation, isPending, isSuccess };
};
