import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { activatePayPalSubscription } from "../../paypal.network";
import { NotificationColor } from "@/global/enums";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { setAuth } from "@/user/auth.slice";
import { useDispatch } from "react-redux";
import { Role } from "@/user/enums";
import { useGetPayPalSubscription } from "../read";
import { Status } from "@/subscription/enums";

export const useActivatePayPalSubscription = () => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const { refetchPayPalSubscription } = useGetPayPalSubscription();
  const { auth } = useSelector((state: RootState) => state.auth);

  const { mutate: activatePayPalSubscriptionMutation, isPending } = useMutation(
    {
      mutationFn: activatePayPalSubscription,

      onSuccess: async (data: any, _variables: any, _context: any) => {
        showNotification(data?.message, NotificationColor.Success);
        await refetchPayPalSubscription();

        dispatch(
          setAuth({
            ...auth,
            role: Role.Subscriber,
            subscriptionStatus: Status.Active,
          })
        );
      },

      onError: async (error: any) => {
        showNotification(
          error?.response?.data?.message ||
            error.message ||
            "An error occurred",
          NotificationColor.Failure
        );
      },
    }
  );

  return {
    activatePayPalSubscriptionMutation,
    isPending,
  };
};
