import { forwardRef } from "react";
import { Stack, StackProps } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

interface WrapperStackComponentProps extends StackProps {
  mobP?: number;
  deskP?: number;
}

export const WrapperStackComponent = forwardRef<
  HTMLDivElement,
  WrapperStackComponentProps
>(({ mobP = 0, deskP = 8, ...props }, ref) => {
  const { isMobile } = useSelector((state: RootState) => state.view);

  const padding = isMobile ? mobP : deskP;

  return <Stack {...props} ref={ref} p={padding} />;
});

WrapperStackComponent.displayName = "WrapperStackComponent";
