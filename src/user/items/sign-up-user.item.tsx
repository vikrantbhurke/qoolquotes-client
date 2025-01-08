import { SeoComponent } from "@/global/components/components";
import { SignUpUserFormLayout } from "../layouts";

export const SignUpUserItem = () => {
  return (
    <>
      <SeoComponent
        title="Sign Up Page"
        description="Sign up for a new account."
      />
      <SignUpUserFormLayout />
    </>
  );
};
