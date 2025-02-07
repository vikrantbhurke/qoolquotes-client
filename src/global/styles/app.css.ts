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

export const skeletonStyle = style({
  backgroundColor: oneBg, // Main skeleton color
  selectors: {
    "&::before": {
      backgroundColor: oneBg, // Shimmer effect
    },
  },
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

// Fonts

// Sans Serif

export const interFontStyle = style({
  fontFamily: "Inter",
});

export const readexProFontStyle = style({
  fontFamily: "Readex Pro",
});

export const silkScreenFontStyle = style({
  fontFamily: "Silk Screen",
});

export const icebergFontStyle = style({
  fontFamily: "Iceberg",
});

export const amaticScFontStyle = style({
  fontFamily: "Amatic SC",
});

export const quicksandFontStyle = style({
  fontFamily: "Quicksand",
});

export const protestRiotFontStyle = style({
  fontFamily: "Protest Riot",
});

export const protestRevolutionFontStyle = style({
  fontFamily: "Protest Revolution",
});

export const juliusSansOneFontStyle = style({
  fontFamily: "Julius Sans One",
});

export const mansalvaFontStyle = style({
  fontFamily: "Mansalva",
});

export const ysabeauScFontStyle = style({
  fontFamily: "Ysabeau SC",
});

export const fingerPaintFontStyle = style({
  fontFamily: "Finger Paint",
});

export const dongleFontStyle = style({
  fontFamily: "Dongle",
});

export const gaeguFontStyle = style({
  fontFamily: "Gaegu",
});

export const carroisGothicScFontStyle = style({
  fontFamily: "Carrois Gothic SC",
});

export const nosiferFontStyle = style({
  fontFamily: "Nosifer",
});

export const bungeeHairlineFontStyle = style({
  fontFamily: "Bungee Hairline",
});

export const icelandFontStyle = style({
  fontFamily: "Iceland",
});

export const tourneyFontStyle = style({
  fontFamily: "Tourney",
});

// Serif

export const cinzelFontStyle = style({
  fontFamily: "Cinzel",
});

export const alegreyaFontStyle = style({
  fontFamily: "Alegreya",
});

export const josefinSlabFontStyle = style({
  fontFamily: "Josefin Slab",
});

export const crimsonProFontStyle = style({
  fontFamily: "Crimson Pro",
});

export const quintessentialFontStyle = style({
  fontFamily: "Quintessential",
});

export const marcellusScFontStyle = style({
  fontFamily: "Marcellus SC",
});

export const ryeFontStyle = style({
  fontFamily: "Rye",
});

export const zillaSlabHighlightFontStyle = style({
  fontFamily: "Zilla Slab Highlight",
});

export const imFellDwPicaFontStyle = style({
  fontFamily: "IM Fell DW Pica",
});

export const jacquesFrancoisShadowFontStyle = style({
  fontFamily: "Jacques Francois Shadow",
});

export const yujiBokuFontStyle = style({
  fontFamily: "Yuji Boku",
});

/// Cursive

export const dancingScriptFontStyle = style({
  fontFamily: "Dancing Script",
});

export const caveatFontStyle = style({
  fontFamily: "Caveat",
});

export const satisfyFontStyle = style({
  fontFamily: "Satisfy",
});

export const permanentMarkerFontStyle = style({
  fontFamily: "Permanent Marker",
});

export const kaushanScriptFontStyle = style({
  fontFamily: "Kaushan Script",
});

export const meriendaFontStyle = style({
  fontFamily: "Merienda",
});

export const parisienneFontStyle = style({
  fontFamily: "Parisienne",
});

export const badScriptFontStyle = style({
  fontFamily: "Bad Script",
});

export const nanumPenScriptFontStyle = style({
  fontFamily: "Nanum Pen Script",
});

export const reenieBeanieFontStyle = style({
  fontFamily: "Reenie Beanie",
});

export const marckScriptFontStyle = style({
  fontFamily: "Marck Script",
});

export const nothingYouCouldDoFontStyle = style({
  fontFamily: "Nothing You Could Do",
});

export const shortStackFontStyle = style({
  fontFamily: "Short Stack",
});

export const caveatBrushFontStyle = style({
  fontFamily: "Caveat Brush",
});

export const nanumBrushScriptFontStyle = style({
  fontFamily: "Nanum Brush Script",
});

export const loveYaLikeASisterFontStyle = style({
  fontFamily: "Love Ya Like A Sister",
});

export const fondamentoFontStyle = style({
  fontFamily: "Fondamento",
});

export const rougeScriptFontStyle = style({
  fontFamily: "Rouge Script",
});

export const montezFontStyle = style({
  fontFamily: "Montez",
});

export const clickerScriptFontStyle = style({
  fontFamily: "Clicker Script",
});

export const shantellSansFontStyle = style({
  fontFamily: "Shantell Sans",
});

export const squarePegFontStyle = style({
  fontFamily: "Square Peg",
});

// System UI

export const bangersFontStyle = style({
  fontFamily: "Bangers",
});

export const specialEliteFontStyle = style({
  fontFamily: "Special Elite",
});

export const alkatraFontStyle = style({
  fontFamily: "Alkatra",
});

export const barrioFontStyle = style({
  fontFamily: "Barrio",
});

export const jollyLodgerFontStyle = style({
  fontFamily: "Jolly Lodger",
});

export const trainOneFontStyle = style({
  fontFamily: "Train One",
});

export const newRockerFontStyle = style({
  fontFamily: "New Rocker",
});

export const lacquerFontStyle = style({
  fontFamily: "Lacquer",
});

export const rubikWetPaintFontStyle = style({
  fontFamily: "Rubik Wet Paint",
});

export const rubikVinylFontStyle = style({
  fontFamily: "Rubik Vinyl",
});

// Monospace

export const sourceCodeProFontStyle = style({
  fontFamily: "Source Code Pro",
});

export const cutiveMonoFontStyle = style({
  fontFamily: "Cutive Mono",
});

export const shareTechMonoFontStyle = style({
  fontFamily: "Share Tech Mono",
});
