import { RootState } from "@/global/states/store";
import { useSelector } from "react-redux";

export const ComponentOneOrTwoRoute = ({
  clearance,
  compOne,
  compTwo,
}: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  return clearance.includes(auth.role) ? compOne : compTwo;
};
