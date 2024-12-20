import { notifications } from "@mantine/notifications";
import { NotificationColor } from "../enums/notification-color.enum";
import { borderLowContrast, fiveBg, oneBg } from "../styles/app.css";
import { useMantineColorScheme } from "@mantine/core";

export const useNotification = () => {
  const { colorScheme } = useMantineColorScheme();

  const showNotification = (title: string, color: NotificationColor) => {
    notifications.show({
      title,
      color,
      position: "bottom-center",
      message: "",
      style: {
        backgroundColor: colorScheme === "dark" ? fiveBg : oneBg,
        border: borderLowContrast,
      },
      autoClose: 5000,
    });
  };

  return { showNotification };
};
