import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { activateStripeSubscription } from "../../stripe.network";
import { NotificationColor } from "@/global/enums";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { setAuth } from "@/user/auth.slice";
import { useDispatch } from "react-redux";
import { Role } from "@/user/enums";
import { useGetStripeSubscription } from "../read";

export const useActivateStripeSubscription = () => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const { refetchStripeSubscription } = useGetStripeSubscription();
  const { auth } = useSelector((state: RootState) => state.auth);

  const { mutate: activateStripeSubscriptionMutation, isPending } = useMutation(
    {
      mutationFn: activateStripeSubscription,

      onSuccess: async (data: any, _variables: any, _context: any) => {
        showNotification(data?.message, NotificationColor.Success);
        await refetchStripeSubscription();
        dispatch(setAuth({ ...auth, role: Role.Subscriber }));
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
    activateStripeSubscriptionMutation,
    isPending,
  };
};
