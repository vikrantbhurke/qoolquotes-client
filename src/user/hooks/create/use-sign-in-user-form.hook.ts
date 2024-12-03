import { useForm } from "@mantine/form";
import { useSignInUser } from "./use-sign-in-user.hook";

export const useSignInUserForm = () => {
  const { signInUserMutation, isPending } = useSignInUser();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },
  });

  const handleSignInUser = (values: any) => {
    signInUserMutation(values);
    form.reset();
  };

  return { form, handleSignInUser, isPending };
};
