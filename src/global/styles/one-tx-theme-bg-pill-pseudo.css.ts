import {
  oneTx,
  oneRedTx,
  onePinkTx,
  oneGrapeTx,
  oneVioletTx,
  oneIndigoTx,
  oneBlueTx,
  oneCyanTx,
  oneTealTx,
  oneGreenTx,
  oneLimeTx,
  oneYellowTx,
  oneOrangeTx,
  threeBg,
  threeRedBg,
  threePinkBg,
  threeGrapeBg,
  threeVioletBg,
  threeIndigoBg,
  threeBlueBg,
  threeCyanBg,
  threeTealBg,
  threeGreenBg,
  threeLimeBg,
  threeYellowBg,
  threeOrangeBg,
  themeDefaultBg,
  themeRedBg,
  themePinkBg,
  themeGrapeBg,
  themeVioletBg,
  themeIndigoBg,
  themeBlueBg,
  themeCyanBg,
  themeTealBg,
  themeGreenBg,
  themeLimeBg,
  themeYellowBg,
  themeOrangeBg,
} from "./renamed.variables";
import { vars } from "./theme";
import { style } from "@vanilla-extract/css";

export const oneTxThemeBgPillPseudoStyle = style({
  color: oneTx,
  backgroundColor: threeBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeDefaultBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeDefaultBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeDefaultBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeDefaultBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeDefaultBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeDefaultBg,
    },
  },
});

export const oneTxThemeRedBgPillPseudoStyle = style({
  color: oneRedTx,
  backgroundColor: threeRedBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneRedTx,
    backgroundColor: themeRedBg,
  },
  ":active": {
    color: oneRedTx,
    backgroundColor: themeRedBg,
  },
  ":focus": {
    color: oneRedTx,
    backgroundColor: themeRedBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneRedTx,
      backgroundColor: threeRedBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneRedTx,
      backgroundColor: themeRedBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneRedTx,
      backgroundColor: themeRedBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneRedTx,
      backgroundColor: themeRedBg,
    },
  },
});

export const oneTxThemePinkBgPillPseudoStyle = style({
  color: onePinkTx,
  backgroundColor: threePinkBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: onePinkTx,
    backgroundColor: themePinkBg,
  },
  ":active": {
    color: onePinkTx,
    backgroundColor: themePinkBg,
  },
  ":focus": {
    color: onePinkTx,
    backgroundColor: themePinkBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: onePinkTx,
      backgroundColor: threePinkBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: onePinkTx,
      backgroundColor: themePinkBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: onePinkTx,
      backgroundColor: themePinkBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: onePinkTx,
      backgroundColor: themePinkBg,
    },
  },
});

export const oneTxThemeGrapeBgPillPseudoStyle = style({
  color: oneGrapeTx,
  backgroundColor: threeGrapeBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneGrapeTx,
    backgroundColor: themeGrapeBg,
  },
  ":active": {
    color: oneGrapeTx,
    backgroundColor: themeGrapeBg,
  },
  ":focus": {
    color: oneGrapeTx,
    backgroundColor: themeGrapeBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneGrapeTx,
      backgroundColor: threeGrapeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneGrapeTx,
      backgroundColor: themeGrapeBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneGrapeTx,
      backgroundColor: themeGrapeBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneGrapeTx,
      backgroundColor: themeGrapeBg,
    },
  },
});

export const oneTxThemeVioletBgPillPseudoStyle = style({
  color: oneVioletTx,
  backgroundColor: threeVioletBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneVioletTx,
    backgroundColor: themeVioletBg,
  },
  ":active": {
    color: oneVioletTx,
    backgroundColor: themeVioletBg,
  },
  ":focus": {
    color: oneVioletTx,
    backgroundColor: themeVioletBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneVioletTx,
      backgroundColor: threeVioletBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneVioletTx,
      backgroundColor: themeVioletBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneVioletTx,
      backgroundColor: themeVioletBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneVioletTx,
      backgroundColor: themeVioletBg,
    },
  },
});

export const oneTxThemeIndigoBgPillPseudoStyle = style({
  color: oneIndigoTx,
  backgroundColor: threeIndigoBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneIndigoTx,
    backgroundColor: themeIndigoBg,
  },
  ":active": {
    color: oneIndigoTx,
    backgroundColor: themeIndigoBg,
  },
  ":focus": {
    color: oneIndigoTx,
    backgroundColor: themeIndigoBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneIndigoTx,
      backgroundColor: threeIndigoBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneIndigoTx,
      backgroundColor: themeIndigoBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneIndigoTx,
      backgroundColor: themeIndigoBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneIndigoTx,
      backgroundColor: themeIndigoBg,
    },
  },
});

export const oneTxThemeBlueBgPillPseudoStyle = style({
  color: oneBlueTx,
  backgroundColor: threeBlueBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneBlueTx,
    backgroundColor: themeBlueBg,
  },
  ":active": {
    color: oneBlueTx,
    backgroundColor: themeBlueBg,
  },
  ":focus": {
    color: oneBlueTx,
    backgroundColor: themeBlueBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneBlueTx,
      backgroundColor: threeBlueBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneBlueTx,
      backgroundColor: themeBlueBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneBlueTx,
      backgroundColor: themeBlueBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneBlueTx,
      backgroundColor: themeBlueBg,
    },
  },
});

export const oneTxThemeCyanBgPillPseudoStyle = style({
  color: oneCyanTx,
  backgroundColor: threeCyanBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneCyanTx,
    backgroundColor: themeCyanBg,
  },
  ":active": {
    color: oneCyanTx,
    backgroundColor: themeCyanBg,
  },
  ":focus": {
    color: oneCyanTx,
    backgroundColor: themeCyanBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneCyanTx,
      backgroundColor: threeCyanBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneCyanTx,
      backgroundColor: themeCyanBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneCyanTx,
      backgroundColor: themeCyanBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneCyanTx,
      backgroundColor: themeCyanBg,
    },
  },
});

export const oneTxThemeTealBgPillPseudoStyle = style({
  color: oneTealTx,
  backgroundColor: threeTealBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTealTx,
    backgroundColor: themeTealBg,
  },
  ":active": {
    color: oneTealTx,
    backgroundColor: themeTealBg,
  },
  ":focus": {
    color: oneTealTx,
    backgroundColor: themeTealBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTealTx,
      backgroundColor: threeTealBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTealTx,
      backgroundColor: themeTealBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTealTx,
      backgroundColor: themeTealBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTealTx,
      backgroundColor: themeTealBg,
    },
  },
});

export const oneTxThemeGreenBgPillPseudoStyle = style({
  color: oneGreenTx,
  backgroundColor: threeGreenBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneGreenTx,
    backgroundColor: themeGreenBg,
  },
  ":active": {
    color: oneGreenTx,
    backgroundColor: themeGreenBg,
  },
  ":focus": {
    color: oneGreenTx,
    backgroundColor: themeGreenBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneGreenTx,
      backgroundColor: threeGreenBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneGreenTx,
      backgroundColor: themeGreenBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneGreenTx,
      backgroundColor: themeGreenBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneGreenTx,
      backgroundColor: themeGreenBg,
    },
  },
});

export const oneTxThemeLimeBgPillPseudoStyle = style({
  color: oneLimeTx,
  backgroundColor: threeLimeBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneLimeTx,
    backgroundColor: themeLimeBg,
  },
  ":active": {
    color: oneLimeTx,
    backgroundColor: themeLimeBg,
  },
  ":focus": {
    color: oneLimeTx,
    backgroundColor: themeLimeBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneLimeTx,
      backgroundColor: threeLimeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneLimeTx,
      backgroundColor: themeLimeBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneLimeTx,
      backgroundColor: themeLimeBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneLimeTx,
      backgroundColor: themeLimeBg,
    },
  },
});

export const oneTxThemeYellowBgPillPseudoStyle = style({
  color: oneYellowTx,
  backgroundColor: threeYellowBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneYellowTx,
    backgroundColor: themeYellowBg,
  },
  ":active": {
    color: oneYellowTx,
    backgroundColor: themeYellowBg,
  },
  ":focus": {
    color: oneYellowTx,
    backgroundColor: themeYellowBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneYellowTx,
      backgroundColor: threeYellowBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneYellowTx,
      backgroundColor: themeYellowBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneYellowTx,
      backgroundColor: themeYellowBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneYellowTx,
      backgroundColor: themeYellowBg,
    },
  },
});

export const oneTxThemeOrangeBgPillPseudoStyle = style({
  color: oneOrangeTx,
  backgroundColor: threeOrangeBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneOrangeTx,
    backgroundColor: themeOrangeBg,
  },
  ":active": {
    color: oneOrangeTx,
    backgroundColor: themeOrangeBg,
  },
  ":focus": {
    color: oneOrangeTx,
    backgroundColor: themeOrangeBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneOrangeTx,
      backgroundColor: threeOrangeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneOrangeTx,
      backgroundColor: themeOrangeBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneOrangeTx,
      backgroundColor: themeOrangeBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneOrangeTx,
      backgroundColor: themeOrangeBg,
    },
  },
});
