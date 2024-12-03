import { getUserById } from "@/user/user.network";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetUserById = () => {
  let { uid } = useParams();

  const {
    data: user,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getUserById", uid],
    queryFn: () => getUserById(uid),
  });

  return { user, isPending, isError, error };
};
