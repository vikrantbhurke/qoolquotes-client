import { useViewportSize } from "@mantine/hooks";
import { Breakpoint } from "../enums";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsMobile } from "../states/view.slice";

export const useIsMobile = () => {
  const dispatch = useDispatch();
  const { width } = useViewportSize();

  useEffect(() => {
    if (width < Breakpoint.md) dispatch(setIsMobile(true));
    else dispatch(setIsMobile(false));
  }, [width]);
};
