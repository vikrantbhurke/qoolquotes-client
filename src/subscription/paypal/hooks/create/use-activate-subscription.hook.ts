import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { activateSubscription } from "../../paypal.network";
import { NotificationColor } from "@/global/enums";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { setAuth } from "@/user/auth.slice";
import { useDispatch } from "react-redux";
import { Role } from "@/user/enums";
import { useGetSubscription } from "../read";

export const useActivateSubscription = () => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const { refetchSubscription } = useGetSubscription();
  const { auth } = useSelector((state: RootState) => state.auth);

  const { mutate: activateSubscriptionMutation, isPending } = useMutation({
    mutationFn: activateSubscription,

    onSuccess: async (data: any, _variables: any, _context: any) => {
      showNotification(data?.message, NotificationColor.Success);
      await refetchSubscription();
      dispatch(setAuth({ ...auth, role: Role.Subscriber }));
    },

    onError: async (error: any) => {
      showNotification(
        error?.response?.data?.message || error.message || "An error occurred",
        NotificationColor.Failure
      );
    },
  });

  return { activateSubscriptionMutation, isPending };
};
