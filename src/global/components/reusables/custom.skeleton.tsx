import { threeDefaultBg } from "@/global/styles/renamed.variables";
import { Skeleton } from "@mui/material";

export const CustomSkeleton = ({
  a = "wave",
  v = "text",
  w = 100,
  h = 25,
  bgcolor = threeDefaultBg,
}: any) => {
  return (
    <Skeleton animation={a} variant={v} sx={{ bgcolor }} width={w} height={h} />
  );
};
