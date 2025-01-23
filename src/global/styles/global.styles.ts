import {
  oneBg,
  oneTx,
  twoBg,
  threeBg,
  borderLCBorder,
  borderHCBorder,
} from "./app.css";

export const mainContentWidth = 1000;
export const quoteCardMaxWidth = 600;
export const subheaderHeight = 60;
export const headerHeight = 60;
export const footerHeight = 60;
export const smallButtonHeight = 40;
export const largeButtonHeight = 60;
export const listItemHeight = 80;
export const navbarAsideWidth = 320;
export const responsiveBreakpoint = "md";

export const getListButtonHeight = (isMobile: boolean) =>
  isMobile ? largeButtonHeight : smallButtonHeight;

export const getComboboxStyles = (colorScheme: string) => ({
  optionBg: colorScheme === "dark" ? threeBg : oneBg,
  dropdownBg: colorScheme === "dark" ? oneBg : threeBg,
});

// export const getMainAndContentGap = (
//   mainWidth: number,
//   navbarAsideWidth: number,
//   mainContentWidth: number
// ) => {
//   const mainAndContentGap = mainWidth - 2 * navbarAsideWidth - mainContentWidth;
//   let border = mainAndContentGap > 0 ? borderLowContrast : "none";

//   return {
//     borderLeft: border,
//     borderRight: border,
//   };
// };

// export const getMainContentHeight = (
//   headerHeight: number,
//   footerHeight: number,
//   subheaderHeight: number,
//   isMobile: boolean
// ) =>
//   `calc(100vh - ${headerHeight}px - ${isMobile ? footerHeight : 0}px - ${subheaderHeight}px)`;

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

export const getSearchTextInput = (isMobile: boolean, width: number) => ({
  input: {
    backgroundColor: "transparent",
    height: isMobile ? headerHeight : "100%",
    width,
    maxWidth: isMobile ? "100%" : 500,
    border: borderHCBorder,
    borderRadius: isMobile ? 0 : 8,
  },
});

export const getItemCardStyles = (isMobile: boolean) => ({
  backgroundColor: oneBg,
  border: isMobile ? "none" : borderLCBorder,
  borderRadius: isMobile ? 0 : 10,
});

// export const getGridBorder = (
//   isMobile: boolean,
//   index: number,
//   totalItems: number
// ) => {
//   return {
//     borderTop: "none",
//     borderBottom: borderLowContrast,
//     borderRight: isMobile
//       ? "none"
//       : index % 2 === 0 && index !== totalItems - 1
//         ? borderLowContrast
//         : "none",
//     borderLeft: "none",
//   };
// };

export const getGridListItemBorderWithBorder = (isMobile: boolean) => {
  if (isMobile) {
    return {
      borderTop: "none",
      borderBottom: borderLCBorder,
      borderRight: "none",
      borderLeft: "none",
    };
  } else {
    return {
      border: borderLCBorder,
      borderRadius: "10px",
      transition: "box-shadow 0.3s ease",
    };
  }
};

// export const getGridListItemBorderNoBorder = (isMobile: boolean) => {
//   if (isMobile) {
//     return {
//       borderTop: "none",
//       borderBottom: "none",
//       borderRight: "none",
//       borderLeft: "none",
//     };
//   } else return {};
// };

export const getSubheadersStyles = (isMobile: boolean) => {
  return {
    borderBottom: borderLCBorder,
    borderLeft: isMobile ? "none" : borderLCBorder,
    borderRight: isMobile ? "none" : borderLCBorder,
    borderTop: "none",
  };
};

export const getPaginationStyles = (isMobile: boolean) => {
  return {
    borderTop: borderLCBorder,
    borderLeft: isMobile ? "none" : borderLCBorder,
    borderRight: isMobile ? "none" : borderLCBorder,
    borderBottom: "none",
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

export const addBoxShadow = (e: any) => {
  e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
};

export const removeBoxShadow = (e: any) => {
  e.currentTarget.style.boxShadow = "none";
};

export const modal = {
  title: {
    fontFamily: "Readex Pro",
    textAlign: "center" as const,
    width: "100%",
  },
  content: { backgroundColor: `${twoBg}` },
  header: { backgroundColor: `${twoBg}` },
};

export const modalOverlayProps = {
  backgroundOpacity: 0.55,
  blur: 3,
};

export const drawer = {
  title: { fontFamily: "Readex Pro" },
  header: { backgroundColor: `${twoBg}` },
  content: {
    borderRadius: "20px 20px 0 0",
    backgroundColor: `${twoBg}`,
  },
};

export const getFormTextInput = (isFocused: boolean) => ({
  input: {
    padding: "1.5rem",
    backgroundColor: oneBg,
    border: isFocused ? borderHCBorder : borderLCBorder,
  },
});

export const getComboboxTextInput = (isFocused: boolean) => ({
  input: {
    fontFamily: "Readex Pro",
    fontWeight: 300,
    textAlign: "center" as const,
    padding: "1.5rem",
    color: oneTx,
    backgroundColor: oneBg,
    border: isFocused ? borderHCBorder : borderLCBorder,
  },
});

export const getComboboxTextInputForPagination = () => ({
  input: {
    fontFamily: "Readex Pro",
    fontWeight: 300,
    textAlign: "center" as const,
    color: oneTx,
    backgroundColor: threeBg,
    border: borderHCBorder,
  },
});

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
