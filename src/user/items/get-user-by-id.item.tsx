import { CustomLoader } from "@/global/components/loaders";
import { useGetUserById } from "../hooks/read";
import { CustomError } from "@/global/components/errors";
import { UserItemLayout } from "../layouts/user-item.layout";
import { SeoComponent } from "@/global/components/components";
import { twoBg } from "@/global/styles/app.css";

export const GetUserByIdItem = () => {
  const { user, isPending, isError, error } = useGetUserById();

  if (isPending) return <CustomLoader bg={twoBg} />;

  if (isError) return <CustomError message={error?.message} bg={twoBg} />;

  if (!user) return <CustomError message="User not found." bg={twoBg} />;

  return (
    <>
      <SeoComponent
        title={`Profile Page`}
        description="Learn more about Qool Quotes."
      />
      <UserItemLayout user={user} />;
    </>
  );
};
