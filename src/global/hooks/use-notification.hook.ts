import { notifications } from "@mantine/notifications";
import { NotificationColor } from "../enums/notification-color.enum";
import { threeBg } from "../styles/app.css";

export const useNotification = () => {
  const showNotification = (title: string, color: NotificationColor) => {
    notifications.show({
      title,
      color,
      position: "bottom-center",
      message: "",
      style: { backgroundColor: threeBg },
      autoClose: 5000,
    });
  };

  return { showNotification };
};
