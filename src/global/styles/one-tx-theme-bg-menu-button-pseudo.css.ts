import {
  oneDefaultTx,
  oneDefaultBg,
  threeDefaultBg,
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

export const oneTxThemeBgMenuButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: themeDefaultBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: themeDefaultBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: themeDefaultBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: themeDefaultBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: themeDefaultBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: themeDefaultBg,
    },
  },
});

export const oneTxThemeRedBgMenuButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: themeRedBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: themeRedBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: themeRedBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: themeRedBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: themeRedBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: themeRedBg,
    },
  },
});

export const oneTxThemePinkBgMenuButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: themePinkBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: themePinkBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: themePinkBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: themePinkBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: themePinkBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: themePinkBg,
    },
  },
});

export const oneTxThemeGrapeBgMenuButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: themeGrapeBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: themeGrapeBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: themeGrapeBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: themeGrapeBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: themeGrapeBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: themeGrapeBg,
    },
  },
});

export const oneTxThemeVioletBgMenuButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: themeVioletBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: themeVioletBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: themeVioletBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: themeVioletBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: themeVioletBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: themeVioletBg,
    },
  },
});

export const oneTxThemeIndigoBgMenuButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: themeIndigoBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: themeIndigoBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: themeIndigoBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: themeIndigoBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: themeIndigoBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: themeIndigoBg,
    },
  },
});

export const oneTxThemeBlueBgMenuButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: themeBlueBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: themeBlueBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: themeBlueBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: themeBlueBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: themeBlueBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: themeBlueBg,
    },
  },
});

export const oneTxThemeCyanBgMenuButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: themeCyanBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: themeCyanBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: themeCyanBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: themeCyanBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: themeCyanBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: themeCyanBg,
    },
  },
});

export const oneTxThemeTealBgMenuButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: themeTealBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: themeTealBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: themeTealBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: themeTealBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: themeTealBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: themeTealBg,
    },
  },
});

export const oneTxThemeGreenBgMenuButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: themeGreenBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: themeGreenBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: themeGreenBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: themeGreenBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: themeGreenBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: themeGreenBg,
    },
  },
});

export const oneTxThemeLimeBgMenuButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: themeLimeBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: themeLimeBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: themeLimeBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: themeLimeBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: themeLimeBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: themeLimeBg,
    },
  },
});

export const oneTxThemeYellowBgMenuButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: themeYellowBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: themeYellowBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: themeYellowBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: themeYellowBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: themeYellowBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: themeYellowBg,
    },
  },
});

export const oneTxThemeOrangeBgMenuButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: themeOrangeBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: themeOrangeBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: themeOrangeBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: themeOrangeBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: themeOrangeBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: themeOrangeBg,
    },
  },
});
