import { Breakpoint } from "../enums";
import { twoBg, oneBg, oneTx, threeBg, HCBorder } from "./app.css";

export const textBold = 500;
export const marginLeft = 50;
export const textBolder = 700;
export const buttonHeight = 40;
export const buttonNormal = 400;
export const listItemHeight = 80;
export const layoutCompHeight = 60;
export const navbarAsideWidth = 320;
export const mainContentWidth = Breakpoint.md;
export const aboutContentWidth = Breakpoint.sm;
export const quoteCardMaxWidth = Breakpoint.xs;
export const quoteLayoutWidth = Breakpoint.md;
export const playlistLayoutWidth = Breakpoint.xs;
export const authorTopicLayoutWidth = Breakpoint.sm;
export const responsiveBreakpoint = "sm";

export const modal = {
  title: {
    textAlign: "center" as const,
    width: "100%",
    fontWeight: 700,
    fontFamily: "Inter",
  },
  content: {
    backgroundColor: oneBg,
    borderRadius: 10,
  },
  header: { backgroundColor: oneBg },
};

export const modalOverlayProps = {
  backgroundOpacity: 0.55,
  blur: 3,
};

export const drawer = {
  title: {
    textAlign: "center" as const,
    width: "100%",
    fontWeight: 700,
  },
  content: {
    backgroundColor: oneBg,
    borderRadius: "20px 20px 0 0",
  },
  header: { backgroundColor: oneBg },
};

export const stringTruncate = {
  display: "inline-block",
  maxWidth: "15ch",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const getDropdownStyles = (colorScheme: string) => ({
  dropdownBg: colorScheme === "dark" ? threeBg : oneBg,
});

export const getAppShellStyles = (
  isMobile: boolean,
  footerHeight: number,
  headerHeight: number,
  navbarAsideWidth: number,
  opened: boolean
) => ({
  header: { height: headerHeight },
  navbar: {
    width: navbarAsideWidth,
    breakpoint: Breakpoint.md,
    collapsed: { mobile: !opened },
  },
  aside: {
    width: navbarAsideWidth,
    breakpoint: Breakpoint.md,
    collapsed: { mobile: true },
  },
  footer: {
    height: isMobile ? footerHeight : 0,
  },
});

export const getSearchTextInputStyles = (isMobile: boolean, width: number) => ({
  input: {
    backgroundColor: oneBg,
    height: isMobile ? layoutCompHeight : "100%",
    width,
    maxWidth: isMobile ? "100%" : 500,
    border: HCBorder,
    borderRadius: isMobile ? 0 : 10,
    fontFamily: "Inter",
  },
});

export const getTopRoundBordersStyles = (isMobile: boolean) => {
  return {
    borderRadius: isMobile ? "0" : "10px 10px 0 0",
  };
};

export const getBottomRoundBordersStyles = (isMobile: boolean) => {
  return {
    borderRadius: isMobile ? "0" : "0 0 10px 10px",
  };
};

export const addBoxShadowStyles = (e: any) => {
  e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
};

export const removeBoxShadowStyles = (e: any) => {
  e.currentTarget.style.boxShadow = "none";
};

export const getFormTextInputStyles = (isFocused: boolean) => ({
  input: {
    padding: "1rem",
    backgroundColor: twoBg,
    border: isFocused ? HCBorder : "none",
    fontFamily: "Inter",
  },
});

export const getComboboxTextInputStyles = (isFocused: boolean) => ({
  input: {
    textAlign: "center" as const,
    padding: "1rem",
    color: oneTx,
    backgroundColor: twoBg,
    border: isFocused ? HCBorder : "none",
    fontFamily: "Inter",
  },
});

export const getComboboxTextInputForPaginationStyles = () => ({
  input: {
    textAlign: "center" as const,
    color: oneTx,
    backgroundColor: threeBg,
    border: HCBorder,
  },
});

export const getPlaylistTabStyles = (isActive: boolean) => {
  return {
    backgroundColor: oneBg,
    borderRadius: 0,
    borderBottom: isActive ? `2px solid ${oneTx}` : "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
  };
};
