import { RootState } from "@/global/states/store";
import { setAuth } from "@/user/auth.slice";
import { getUserByUsername } from "@/user/user.network";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const useGetUserByUsername = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.auth);

  const { data: user, refetch: fetchUserByUsername } = useQuery({
    queryKey: ["getUserByUsername", auth.username],
    queryFn: () => getUserByUsername(auth.username),
    enabled: !!auth.username,
    gcTime: 0,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (user) dispatch(setAuth(user));
    else dispatch(setAuth(auth));
  }, [user]);

  return { fetchUserByUsername };
};
