import { useIsMobile } from "@/global/hooks";
import { oneTx } from "@/global/styles/app.css";
import {
  footerHeight,
  getMainContentHeight,
  headerHeight,
} from "@/global/styles/global.styles";
import { Loader, Stack } from "@mantine/core";

export const CustomLoader = ({ subheaderHeight }: any) => {
  const isMobile = useIsMobile();

  return (
    <Stack
      justify="center"
      align="center"
      h={getMainContentHeight(
        headerHeight,
        footerHeight,
        subheaderHeight,
        isMobile
      )}>
      <Loader type="dots" color={oneTx} />
    </Stack>
  );
};
