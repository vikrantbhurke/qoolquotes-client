import { useViewportSize } from "@mantine/hooks";
import { Breakpoint } from "../enums";

export const useIsMobile = () => {
  const { width } = useViewportSize();
  return width < Breakpoint.md;
};
