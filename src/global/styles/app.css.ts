import { vars } from "./theme";
import { style } from "@vanilla-extract/css";

export const oneTx = "var(--primary-text)";
export const oneBg = "var(--primary-background)";
export const twoTx = "var(--secondary-text)";
export const twoBg = "var(--secondary-background)";
export const threeTx = "var(--tertiary-text)";
export const threeBg = "var(--tertiary-background)";
export const fourTx = "var(--quaternary-text)";
export const fourBg = "var(--quaternary-background)";
export const fiveTx = "var(--quinary-text)";
export const fiveBg = "var(--quinary-background)";
export const borderLCColor = "var(--border-low-contrast)";
export const borderHCColor = "var(--border-high-contrast)";
export const themeGreenColor = "var(--theme-green)";
export const themeYellowColor = "var(--theme-yellow)";
export const themeYellowBg = "var(--theme-yellow-bg)";
export const themeGreenBg = "var(--theme-green-bg)";

export const LCBorder = `1px solid ${borderLCColor}`;
export const HCBorder = `2px solid ${borderHCColor}`;

export const noBorderStyle = style({
  border: "none",
});

export const roundBorderStyle = style({
  borderRadius: vars.radius.md,
});

export const roundTopBorderStyle = style({
  borderTopLeftRadius: vars.radius.md,
  borderTopRightRadius: vars.radius.md,
});

export const roundBottomBorderStyle = style({
  borderBottomLeftRadius: vars.radius.md,
  borderBottomRightRadius: vars.radius.md,
});

export const roundLeftBorderStyle = style({
  borderTopLeftRadius: vars.radius.md,
  borderBottomLeftRadius: vars.radius.md,
});

export const roundRightBorderStyle = style({
  borderTopRightRadius: vars.radius.md,
  borderBottomRightRadius: vars.radius.md,
});

export const oneTxOneBgStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: oneBg,
    },
  },
});

export const oneTxTwoBgStyle = style({
  color: oneTx,
  backgroundColor: twoBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: twoBg,
    },
  },
});

export const themeTxStyle = style({
  color: oneTx,
  fontFamily: "Inter",
  transition: "color 0.2s ease-in-out",

  ":hover": {
    color: themeYellowColor,
  },
  ":active": {
    color: themeYellowColor,
  },
  ":focus": {
    color: themeYellowColor,
  },
});

export const oneTxYellowBgMenuButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeYellowBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeYellowBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeYellowBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeYellowBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeYellowBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeYellowBg,
    },
  },
});

export const oneTxGreenBgMenuButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeGreenBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeGreenBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeGreenBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeGreenBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeGreenBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeGreenBg,
    },
  },
});

export const oneTxGreenBgNavbarButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeGreenBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeGreenBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeGreenBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: oneBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeGreenBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeGreenBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeGreenBg,
    },
  },
});

export const oneTxYellowBgNavbarButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeYellowBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeYellowBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeYellowBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: oneBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeYellowBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeYellowBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeYellowBg,
    },
  },
});

export const oneTxYellowBgPillPseudoStyle = style({
  color: oneTx,
  backgroundColor: threeBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeYellowBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeYellowBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeYellowBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeYellowBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeYellowBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeYellowBg,
    },
  },
});

export const oneTxOneBgButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: twoBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: threeBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: threeBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: oneBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: twoBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
  },
});

export const borderShadowStyle = style({
  boxShadow: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
});

export const borderTopShadowStyle = style({
  borderTop: LCBorder,
  boxShadow: `0px -2px 4px rgba(0, 0, 0, 0.1)`,
});

export const borderBottomShadowStyle = style({
  borderBottom: LCBorder,
  boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.1)`,
});

export const borderLeftShadowStyle = style({
  borderLeft: LCBorder,
  boxShadow: `-2px 0px 4px rgba(0, 0, 0, 0.1)`,
});

export const borderRightShadowStyle = style({
  borderRight: LCBorder,
  boxShadow: `2px 0px 4px rgba(0, 0, 0, 0.1)`,
});

export const interFontStyle = style({
  fontFamily: "Inter",
});

export const readexProFontStyle = style({
  fontFamily: "Readex Pro",
});
