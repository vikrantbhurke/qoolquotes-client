import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { suspendPayPalSubscription } from "../../paypal.network";
import { NotificationColor } from "@/global/enums";
import { useGetPayPalSubscription } from "../read";
import { useDispatch } from "react-redux";
import { resetColor, resetFont } from "@/global/states/view.slice";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { setAuth } from "@/user/auth.slice";
import { Role } from "@/user/enums";
import { Status } from "@/subscription/enums";

export const useSuspendPayPalSubscription = () => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const { refetchPayPalSubscription } = useGetPayPalSubscription();
  const { auth } = useSelector((state: RootState) => state.auth);

  const {
    mutate: suspendPayPalSubscriptionMutation,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: suspendPayPalSubscription,

    onSuccess: async (data: any, _variables: any, _context: any) => {
      showNotification(data?.message, NotificationColor.Success);
      await refetchPayPalSubscription();
      dispatch(resetColor());
      dispatch(resetFont());

      dispatch(
        setAuth({
          ...auth,
          role: Role.Private,
          subscriptionStatus: Status.Suspended,
        })
      );
    },

    onError: async (error: any) => {
      showNotification(
        error?.response?.data?.message || error.message || "An error occurred",
        NotificationColor.Failure
      );
    },
  });

  return {
    suspendPayPalSubscriptionMutation,
    isPending,
    isSuccess,
  };
};
