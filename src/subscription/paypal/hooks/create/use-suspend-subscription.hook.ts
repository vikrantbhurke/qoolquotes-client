import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { suspendSubscription } from "../../paypal.network";
import { NotificationColor } from "@/global/enums";
import { useGetUserByUsername } from "@/user/hooks/read";

export const useSuspendSubscription = (
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { showNotification } = useNotification();
  const { fetchUserByUsername } = useGetUserByUsername();

  const { mutate: suspendSubscriptionMutation, isPending } = useMutation({
    mutationFn: suspendSubscription,

    onSuccess: async (data: any, _variables: any, _context: any) => {
      showNotification(data?.message, NotificationColor.Success);
      fetchUserByUsername();
      setRefresh((prev) => !prev);
    },

    onError: (error: any) => {
      showNotification(
        error?.response?.data?.message || error.message || "An error occurred",
        NotificationColor.Failure
      );
    },
  });

  return { suspendSubscriptionMutation, isPending };
};
