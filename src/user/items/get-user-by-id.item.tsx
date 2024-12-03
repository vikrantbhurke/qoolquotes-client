import { CustomLoader } from "@/global/components/loaders";
import { useGetUserById } from "../hooks/read";
import { CustomError } from "@/global/components/errors";
import { UserItemLayout } from "../layouts/user-item.layout";

export const GetUserByIdItem = () => {
  const { user, isPending, isError, error } = useGetUserById();

  if (isPending) return <CustomLoader subheaderHeight={0} />;

  if (isError)
    return <CustomError subheaderHeight={0} message={error?.message} />;

  if (!user)
    return <CustomError subheaderHeight={0} message="User not found." />;

  return <UserItemLayout user={user} />;
};
