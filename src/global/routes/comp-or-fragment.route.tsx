import { RootState } from "@/global/states/store";
import { useSelector } from "react-redux";

export const CompOrFragmentRoute = ({ clearance, children }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  return clearance.includes(auth.role) ? children : <></>;
};
