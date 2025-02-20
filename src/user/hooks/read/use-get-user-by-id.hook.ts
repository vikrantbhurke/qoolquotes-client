import { getUserById } from "@/user/user.network";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetUserById = (uid2: any = null) => {
  let { uid } = useParams();

  // Either use the uid from the URL or the uid2 passed as an argument
  let userId = uid || uid2;

  const {
    data: user,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getUserById", userId],
    queryFn: () => getUserById(userId),
    enabled: !!userId,
  });

  return { user, isPending, isError, error };
};
