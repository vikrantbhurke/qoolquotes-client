import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { activateSubscription } from "../../paypal.network";
import { NotificationColor } from "@/global/enums";
import { useGetSubscription } from "../read";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { getUserByUsername } from "@/user/user.network";
import { setAuth } from "@/user/auth.slice";
import { useDispatch } from "react-redux";
import { Role } from "@/user/enums";

export const useActivateSubscription = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();
  const { refetchSubscription } = useGetSubscription();
  const { auth } = useSelector((state: RootState) => state.auth);

  const { mutate: activateSubscriptionMutation, isPending } = useMutation({
    mutationFn: activateSubscription,

    onMutate: async () => {
      const previousAuth = auth;
      dispatch(setAuth({ ...auth, role: Role.Subscriber }));
      return { previousAuth };
    },

    onSuccess: async (data: any, _variables: any, _context: any) => {
      showNotification(data?.message, NotificationColor.Success);
      await refetchSubscription();

      const user = await queryClient.fetchQuery({
        queryKey: ["getUserByUsername", auth.username],
        queryFn: () => getUserByUsername(auth.username),
      });

      dispatch(setAuth(user));
    },

    onError: async (error: any, context: any) => {
      showNotification(
        error?.response?.data?.message || error.message || "An error occurred",
        NotificationColor.Failure
      );

      dispatch(setAuth(context.previousAuth));
    },
  });

  return { activateSubscriptionMutation, isPending };
};
