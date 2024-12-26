import {
  oneBg,
  oneTx,
  twoBg,
  threeBg,
  borderLowContrast,
  borderHighContrast,
} from "./app.css";

export const mainContentWidth = 750;
export const subheaderHeight = 60;
export const headerHeight = 60;
export const footerHeight = 60;
export const listButtonHeight = 60;
export const listItemHeight = 80;
export const navbarAsideWidth = 400;
export const containerWidth = 1000;
export const responsiveBreakpoint = "md";

export const getComboboxStyles = (colorScheme: string) => ({
  optionBg: colorScheme === "dark" ? threeBg : oneBg,
  dropdownBg: colorScheme === "dark" ? oneBg : threeBg,
});

export const getMainAndContentGap = (
  mainWidth: number,
  navbarAsideWidth: number,
  mainContentWidth: number
) => {
  const mainAndContentGap = mainWidth - 2 * navbarAsideWidth - mainContentWidth;
  let border = mainAndContentGap > 0 ? borderLowContrast : "none";

  return {
    borderLeft: border,
    borderRight: border,
  };
};

export const getMainContentHeight = (
  headerHeight: number,
  footerHeight: number,
  subheaderHeight: number,
  isMobile: boolean
) =>
  `calc(100vh - ${headerHeight}px - ${isMobile ? footerHeight : 0}px - ${subheaderHeight}px)`;

// Component Styles
export const getAppShell = (
  isMobile: boolean,
  footerHeight: number,
  headerHeight: number,
  navbarAsideWidth: number,
  responsiveBreakpoint: string,
  opened: boolean
) => ({
  header: { height: headerHeight },
  navbar: {
    width: navbarAsideWidth,
    breakpoint: responsiveBreakpoint,
    collapsed: { mobile: !opened },
  },
  aside: {
    width: navbarAsideWidth,
    breakpoint: responsiveBreakpoint,
    collapsed: { mobile: true },
  },
  footer: {
    height: isMobile ? footerHeight : 0,
  },
});

export const getSearchTextInput = (
  isMobile: boolean,
  width: number,
  headerHeight: number,
  navbarAsideWidth: number
) => ({
  input: {
    backgroundColor: "transparent",
    height: isMobile ? headerHeight : "100%",
    width: isMobile ? width : width - (navbarAsideWidth + navbarAsideWidth),
    border: borderHighContrast,
    borderRadius: isMobile ? 0 : 8,
  },
});

export const getItemCardStyles = (isMobile: boolean) => ({
  backgroundColor: oneBg,
  border: isMobile ? "none" : borderLowContrast,
  borderRadius: isMobile ? 0 : 10,
});

// Mantine Grid.Colum Component Styles
export const getGridBorder = (
  isMobile: boolean,
  index: number,
  totalItems: number
) => {
  return {
    borderTop: "none",
    borderBottom: borderLowContrast,
    borderRight: isMobile
      ? "none"
      : index % 2 === 0 && index !== totalItems - 1
        ? borderLowContrast
        : "none",
    borderLeft: "none",
  };
};

// Mantine Grid.Colum Custome Child Component Styles
export const getGridItemBorder = (isMobile: boolean) => {
  if (isMobile) {
    return {
      borderTop: "none",
      borderBottom: borderLowContrast,
      borderRight: "none",
      borderLeft: "none",
    };
  } else {
    return {
      border: borderLowContrast,
      borderRadius: "10px",
    };
  }
};

export const getSubheadersStyles = (isMobile: boolean) => {
  return {
    borderBottom: borderLowContrast,
    borderLeft: isMobile ? "none" : borderLowContrast,
    borderRight: isMobile ? "none" : borderLowContrast,
    borderTop: "none",
  };
};

export const getPaginationStyles = (isMobile: boolean) => {
  return {
    borderTop: borderLowContrast,
    borderLeft: isMobile ? "none" : borderLowContrast,
    borderRight: isMobile ? "none" : borderLowContrast,
    borderBottom: "none",
  };
};

export const getRoundBorders = (isMobile: boolean) => {
  return {
    borderRadius: isMobile ? "0" : "10px",
  };
};

export const getTopRoundBorders = (isMobile: boolean) => {
  return {
    borderRadius: isMobile ? "0" : "10px 10px 0 0",
  };
};

export const getBottomRoundBorders = (isMobile: boolean) => {
  return {
    borderRadius: isMobile ? "0" : "0 0 10px 10px",
  };
};

export const buttonBorder = { border: borderLowContrast, borderRadius: 5 };

export const modal = {
  title: { fontFamily: "Readex Pro" },
  content: { backgroundColor: `${twoBg}` },
  header: { backgroundColor: `${twoBg}` },
};

export const modalOverlayProps = {
  backgroundOpacity: 0.55,
  blur: 3,
};

export const getFormTextInput = (isFocused: boolean) => ({
  input: {
    padding: "1.5rem",
    backgroundColor: oneBg,
    border: isFocused ? borderHighContrast : borderLowContrast,
  },
});

export const getComboboxTextInput = (isFocused: boolean) => ({
  input: {
    fontFamily: "Readex Pro",
    fontWeight: 300,
    textAlign: "center" as const,
    padding: "1.5rem",
    backgroundColor: oneBg,
    border: isFocused ? borderHighContrast : borderLowContrast,
  },
});

export const drawer = {
  title: { fontFamily: "Readex Pro" },
  header: { backgroundColor: `${twoBg}` },
  content: {
    borderRadius: "20px 20px 0 0",
    backgroundColor: `${twoBg}`,
  },
};

export const getSubheaderButton = (isActive: boolean) => {
  return {
    backgroundColor: oneBg,
    color: oneTx,
    borderRadius: 0,
    borderBottom: isActive ? `2px solid ${oneTx}` : "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
  };
};
