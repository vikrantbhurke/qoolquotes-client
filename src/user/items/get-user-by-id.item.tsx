import { useGetUserById } from "../hooks/read";
import { CustomError } from "@/global/components/errors";
import { UserItemLayout } from "../layouts/user-item.layout";
import { SeoComponent } from "@/global/components/reusables";
import { twoBg } from "@/global/styles/renamed.variables";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const GetUserByIdItem = () => {
  const { user, isPending, isError, error } = useGetUserById();
  const { isMobile } = useSelector((state: RootState) => state.view);

  const bg = isMobile ? "" : twoBg;

  if (isError) return <CustomError message={error?.message} bg={bg} />;

  if (!user && !isPending)
    return <CustomError message="User not found." bg={bg} />;

  return (
    <>
      <SeoComponent
        title={`Profile Page`}
        description="Learn more about Qool Quotes."
      />
      <UserItemLayout user={user} isPending={isPending} />
    </>
  );
};
