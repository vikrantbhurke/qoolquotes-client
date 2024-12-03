import { messageUtility } from "@/message/message.utility";
import { useCreateMessage } from "./use-create-message.hook";
import { useForm } from "@mantine/form";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const useCreateMessageForm = () => {
  const { createMessageMutation, isPending } = useCreateMessage();
  const { reason } = useSelector((state: RootState) => state.message);

  const form = useForm({
    mode: "controlled",
    initialValues: {
      title: "",
      description: "",
      email: "",
    },

    validate: {
      title: messageUtility.validateTitle,
      description: messageUtility.validateDescription,
      email: messageUtility.validateEmail,
    },
  });

  const handleCreateMessage = (values: any) => {
    const { title, description, email } = values;
    createMessageMutation({ title, description, reason, email });
    form.reset();
  };

  return { form, handleCreateMessage, isPending };
};
