import { useForm } from "@mantine/form";
import { userUtility } from "../../user.utility";
import { useSignUpUser } from "./use-sign-up-user.hook";
import { RootState } from "@/global/states/store";
import { useSelector } from "react-redux";

export const useSignUpUserForm = () => {
  const { signUpUserMutation, isPending } = useSignUpUser();
  const { gender } = useSelector((state: RootState) => state.user);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      firstname: userUtility.validateFirstname,
      lastname: userUtility.validateLastname,
      username: userUtility.validateUsername,
      email: userUtility.validateEmail,
      password: userUtility.validatePassword,
      confirmPassword: userUtility.validateConfirmPassword,
    },
  });

  const handleSignUpUser = (values: any) => {
    const { firstname, lastname, username, email, password } = values;

    signUpUserMutation({
      firstname,
      lastname,
      username,
      email,
      password,
      gender,
    });

    form.reset();
  };

  return { form, handleSignUpUser, isPending };
};
