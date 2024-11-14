import { Breakpoint } from "../enums";
import { borderStyle, twoBg } from "./app.css";

export const getMainAndContentGap = (
  mainWidth: number,
  navbarAsideWidth: number,
  mainContentWidth: number
) => {
  const mainAndContentGap = mainWidth - 2 * navbarAsideWidth - mainContentWidth;
  let border = mainAndContentGap > 0 ? borderStyle : "none";

  return {
    borderLeft: border,
    borderRight: border,
  };
};

export const getMainContentHeight = (
  headerHeight: number,
  footerHeight: number,
  tabHeight: number,
  width: number
) =>
  `calc(100vh - ${headerHeight}px - ${width < Breakpoint.md ? footerHeight : 0}px - ${tabHeight}px)`;

// Component Styles
export const getAppShell = (
  width: number,
  footerHeight: number,
  headerHeight: number,
  navbarAsideWidth: number,
  responsiveBreakpoint: string
) => ({
  header: { height: headerHeight },
  navbar: {
    width: navbarAsideWidth,
    breakpoint: responsiveBreakpoint,
    collapsed: { mobile: true },
  },
  aside: {
    width: navbarAsideWidth,
    breakpoint: responsiveBreakpoint,
    collapsed: { mobile: true },
  },
  footer: {
    height: width < 992 ? footerHeight : 0,
  },
});

export const getSearchTextInput = (
  width: number,
  headerHeight: number,
  navbarAsideWidth: number
) => ({
  input: {
    backgroundColor: "transparent",
    height: headerHeight,
    width: width < 992 ? width : width - (navbarAsideWidth + navbarAsideWidth),
    borderTop: "none",
    borderLeft: width < 992 ? "none" : borderStyle,
    borderRight: width < 992 ? "none" : borderStyle,
    borderBottom: borderStyle,
    borderRadius: 0,
  },
});

export const getFormTextInput = {
  input: {
    borderRadius: 0,
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    borderBottom: borderStyle,
    backgroundColor: "transparent",
  },
};

export const getGridBorder = (width: number, index: number) => {
  return {
    borderTop: "none",
    borderBottom: borderStyle,
    borderRight:
      width < Breakpoint.md ? "none" : index % 2 === 0 ? borderStyle : "none",
    borderLeft: "none",
  };
};

export const modal = {
  content: { backgroundColor: `${twoBg}` },
  header: { backgroundColor: `${twoBg}` },
};

export const drawer = {
  header: { backgroundColor: `${twoBg}` },
  content: {
    borderRadius: "20px 20px 0 0",
    backgroundColor: `${twoBg}`,
  },
};

export const modalOverlayProps = {
  backgroundOpacity: 0.55,
  blur: 3,
};
