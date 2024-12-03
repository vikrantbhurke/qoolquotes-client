import { RootState } from "@/global/states/store";
import { useGetUserById } from "../read";
import { useUpdateUserById } from "./use-update-user-by-id.hook";
import { useSelector } from "react-redux";
import { useForm } from "@mantine/form";
import { userUtility } from "@/user/user.utility";

export const useUpdateUserByIdForm = () => {
  const { user } = useGetUserById();
  const { updateUserByIdMutation, isPending } = useUpdateUserById();
  const { auth } = useSelector((state: RootState) => state.auth);

  const form = useForm({
    mode: "controlled",
    initialValues: {
      profilepic: user.profilepic,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: "",
      confirmPassword: "",
    },

    validate: {
      firstname: (value) =>
        value !== user.firstname ? userUtility.validateFirstname(value) : null,
      lastname: (value) =>
        value !== user.lastname ? userUtility.validateLastname(value) : null,
      email: (value) =>
        value !== user.email ? userUtility.validateEmail(value) : null,
      password: (value) => (value ? userUtility.validatePassword(value) : null),
      confirmPassword: (value, values) =>
        userUtility.validateConfirmPassword(value, values),
    },
  });

  const handleUpdateUserById = (values: any) => {
    const { profilepic, firstname, lastname, email, password } = values;

    updateUserByIdMutation({
      uid: auth.id,
      updateUserByIdDTO: {
        profilepic: form.isDirty("profilepic") ? profilepic : undefined,
        firstname: form.isDirty("firstname") ? firstname : undefined,
        lastname: form.isDirty("lastname") ? lastname : undefined,
        email: form.isDirty("email") ? email : undefined,
        password: form.isDirty("password") ? password : undefined,
      },
    });

    form.setInitialValues({
      profilepic: form.isDirty("profilepic") ? profilepic : user.profilepic,
      firstname: form.isDirty("firstname") ? firstname : user.firstname,
      lastname: form.isDirty("lastname") ? lastname : user.lastname,
      email: form.isDirty("email") ? email : user.email,
      password: "",
      confirmPassword: "",
    });

    form.reset();
  };

  return { user, form, handleUpdateUserById, isPending };
};
