import { RootState } from "@/global/states/store";
import { useVerifyEmail } from "@/user/hooks/read";
import { Loader, Stack, Text } from "@mantine/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useNotification } from "@/global/hooks";
import { NotificationColor } from "@/global/enums";
import { oneTx } from "@/global/styles/renamed.variables";

export const VerifyEmailItem = () => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const { isError, data, error } = useVerifyEmail();

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        navigate(`/users/${auth.id}`);
        showNotification("Email verified.", NotificationColor.Success);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [data]);

  let text = "Email is waiting to be verified.";
  if (isError && error) text = error.message;
  if (!data) text = "Email is waiting to be verified.";
  if (data) text = data.message;

  return (
    <Stack justify="center" align="center" h="100%">
      <Loader type="dots" color={oneTx} />
      <Text fz="sm">{text}</Text>
    </Stack>
  );
};
