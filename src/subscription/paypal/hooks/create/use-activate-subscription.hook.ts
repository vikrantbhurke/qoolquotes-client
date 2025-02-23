import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/global/hooks";
import { activateSubscription } from "../../paypal.network";
import { NotificationColor } from "@/global/enums";
import { useGetUserByUsername } from "@/user/hooks/read";
import { useState } from "react";

export const useActivateSubscription = () => {
  const [_refresh, setRefresh] = useState(false);
  const { showNotification } = useNotification();
  const { fetchUserByUsername } = useGetUserByUsername();

  const { mutate: activateSubscriptionMutation, isPending } = useMutation({
    mutationFn: activateSubscription,

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

  return { activateSubscriptionMutation, isPending };
};
