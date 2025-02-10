import {
  oneTx,
  oneBg,
  threeBg,
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
  color: oneTx,
  backgroundColor: oneBg,
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

export const oneTxThemeRedBgMenuButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeRedBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeRedBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeRedBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeRedBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeRedBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeRedBg,
    },
  },
});

export const oneTxThemePinkBgMenuButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themePinkBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themePinkBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themePinkBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themePinkBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themePinkBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themePinkBg,
    },
  },
});

export const oneTxThemeGrapeBgMenuButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeGrapeBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeGrapeBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeGrapeBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeGrapeBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeGrapeBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeGrapeBg,
    },
  },
});

export const oneTxThemeVioletBgMenuButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeVioletBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeVioletBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeVioletBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeVioletBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeVioletBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeVioletBg,
    },
  },
});

export const oneTxThemeIndigoBgMenuButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeIndigoBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeIndigoBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeIndigoBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeIndigoBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeIndigoBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeIndigoBg,
    },
  },
});

export const oneTxThemeBlueBgMenuButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeBlueBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeBlueBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeBlueBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeBlueBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeBlueBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeBlueBg,
    },
  },
});

export const oneTxThemeCyanBgMenuButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeCyanBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeCyanBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeCyanBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeCyanBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeCyanBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeCyanBg,
    },
  },
});

export const oneTxThemeTealBgMenuButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeTealBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeTealBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeTealBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeTealBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeTealBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeTealBg,
    },
  },
});

export const oneTxThemeGreenBgMenuButtonPseudoStyle = style({
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

export const oneTxThemeLimeBgMenuButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeLimeBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeLimeBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeLimeBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeLimeBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeLimeBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeLimeBg,
    },
  },
});

export const oneTxThemeYellowBgMenuButtonPseudoStyle = style({
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

export const oneTxThemeOrangeBgMenuButtonPseudoStyle = style({
  color: oneTx,
  backgroundColor: oneBg,
  transition: "background-color 0.2s ease-in-out",
  fontFamily: "Inter",

  ":hover": {
    color: oneTx,
    backgroundColor: themeOrangeBg,
  },
  ":active": {
    color: oneTx,
    backgroundColor: themeOrangeBg,
  },
  ":focus": {
    color: oneTx,
    backgroundColor: themeOrangeBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: threeBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneTx,
      backgroundColor: themeOrangeBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneTx,
      backgroundColor: themeOrangeBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneTx,
      backgroundColor: themeOrangeBg,
    },
  },
});
