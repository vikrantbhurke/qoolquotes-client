import { useVerifyAccount } from "@/user/hooks/read";
import { Loader, Stack, Text } from "@mantine/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNotification } from "@/global/hooks";
import { NotificationColor } from "@/global/enums";
import { oneTx } from "@/global/styles/app.css";

export const VerifyAccountItem = () => {
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const { isError, data, error } = useVerifyAccount();

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        navigate("/sign-in");
        showNotification("Account verified.", NotificationColor.Success);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [data, navigate]);

  let text = "Account is waiting to be verified.";
  if (isError && error) text = error.message;
  if (!data) text = "Account is waiting to be verified.";
  if (data) text = data.message;

  return (
    <Stack justify="center" align="center" h="100%">
      <Loader type="dots" color={oneTx} />
      <Text  fz="sm">{text}</Text>
    </Stack>
  );
};
