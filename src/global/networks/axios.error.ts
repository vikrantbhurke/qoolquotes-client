import { AxiosError } from "axios";
import { notifications } from "@mantine/notifications";
import { twoBg } from "../styles/app.css";

interface IAxiosErrorProps {
  error: AxiosError;
  failureColor: string;
}

export const axiosError = async ({ error, failureColor }: IAxiosErrorProps) => {
  // @ts-ignore
  const errorMessage: any = error.response?.data?.message;
  console.log("error", error);
  notifications.show({
    title: errorMessage,
    message: "",
    style: { backgroundColor: twoBg },
    color: failureColor,
    autoClose: 5000,
  });
};
