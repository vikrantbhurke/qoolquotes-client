import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { cancelPayPalSubscription } from "../../paypal.network";
import { NotificationColor } from "@/global/enums";
import { useGetPayPalSubscription } from "../read";
import { useDispatch } from "react-redux";
import { resetColor, resetFont } from "@/global/states/view.slice";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { setAuth } from "@/user/auth.slice";
import { Role } from "@/user/enums";

export const useCancelPayPalSubscription = () => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const { refetchPayPalSubscription } = useGetPayPalSubscription();
  const { auth } = useSelector((state: RootState) => state.auth);

  const {
    mutate: cancelPayPalSubscriptionMutation,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: cancelPayPalSubscription,

    onSuccess: async (data: any, _variables: any, _context: any) => {
      showNotification(data?.message, NotificationColor.Success);
      await refetchPayPalSubscription();
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

  return {
    cancelPayPalSubscriptionMutation,
    isPending,
    isSuccess,
  };
};
