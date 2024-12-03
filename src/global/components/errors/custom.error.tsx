import { useIsMobile } from "@/global/hooks";
import {
  footerHeight,
  getMainContentHeight,
  headerHeight,
} from "@/global/styles/global.styles";
import { Stack } from "@mantine/core";

export const CustomError = ({ subheaderHeight, message }: any) => {
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
      {message}
    </Stack>
  );
};
