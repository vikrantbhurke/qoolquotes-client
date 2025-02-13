import { Color, Font } from "../enums";
import {
  oneDefaultTx,
  oneDefaultBg,
  twoDefaultBg,
  threeDefaultTx,
  threeDefaultBg,
  oneRedTx,
  oneRedBg,
  twoRedBg,
  threeRedTx,
  threeRedBg,
  onePinkTx,
  onePinkBg,
  twoPinkBg,
  threePinkTx,
  threePinkBg,
  oneGrapeTx,
  oneGrapeBg,
  twoGrapeBg,
  threeGrapeTx,
  threeGrapeBg,
  oneVioletTx,
  oneVioletBg,
  twoVioletBg,
  threeVioletTx,
  threeVioletBg,
  oneIndigoTx,
  oneIndigoBg,
  twoIndigoBg,
  threeIndigoTx,
  threeIndigoBg,
  oneBlueTx,
  oneBlueBg,
  twoBlueBg,
  threeBlueTx,
  threeBlueBg,
  oneCyanTx,
  oneCyanBg,
  twoCyanBg,
  threeCyanTx,
  threeCyanBg,
  oneTealTx,
  oneTealBg,
  twoTealBg,
  threeTealTx,
  threeTealBg,
  oneGreenTx,
  oneGreenBg,
  twoGreenBg,
  threeGreenTx,
  threeGreenBg,
  oneLimeTx,
  oneLimeBg,
  twoLimeBg,
  threeLimeTx,
  threeLimeBg,
  oneYellowTx,
  oneYellowBg,
  twoYellowBg,
  threeYellowTx,
  threeYellowBg,
  oneOrangeTx,
  oneOrangeBg,
  twoOrangeBg,
  threeOrangeTx,
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
  fiveDefaultTx,
  fiveRedTx,
  fivePinkTx,
  fiveGrapeTx,
  fiveVioletTx,
  fiveIndigoTx,
  fiveBlueTx,
  fiveCyanTx,
  fiveTealTx,
  fiveGreenTx,
  fiveLimeTx,
  fiveYellowTx,
  fiveOrangeTx,
} from "../styles/renamed.variables";
import {
  themeDefaultTxPseudoStyle,
  themeRedTxPseudoStyle,
  themePinkTxPseudoStyle,
  themeGrapeTxPseudoStyle,
  themeVioletTxPseudoStyle,
  themeIndigoTxPseudoStyle,
  themeBlueTxPseudoStyle,
  themeCyanTxPseudoStyle,
  themeTealTxPseudoStyle,
  themeGreenTxPseudoStyle,
  themeLimeTxPseudoStyle,
  themeYellowTxPseudoStyle,
  themeOrangeTxPseudoStyle,
} from "../styles/theme-tx-pseudo.css";
import {
  oneDefaultTxOneDefaultBgStyle,
  oneRedTxOneRedBgStyle,
  onePinkTxOnePinkBgStyle,
  oneGrapeTxOneGrapeBgStyle,
  oneVioletTxOneVioletBgStyle,
  oneIndigoTxOneIndigoBgStyle,
  oneBlueTxOneBlueBgStyle,
  oneCyanTxOneCyanBgStyle,
  oneTealTxOneTealBgStyle,
  oneGreenTxOneGreenBgStyle,
  oneLimeTxOneLimeBgStyle,
  oneYellowTxOneYellowBgStyle,
  oneOrangeTxOneOrangeBgStyle,
} from "../styles/one-tx-one-bg.css";
import {
  oneDefaultTxTwoDefaultBgStyle,
  oneRedTxTwoRedBgStyle,
  onePinkTxTwoPinkBgStyle,
  oneGrapeTxTwoGrapeBgStyle,
  oneVioletTxTwoVioletBgStyle,
  oneIndigoTxTwoIndigoBgStyle,
  oneBlueTxTwoBlueBgStyle,
  oneCyanTxTwoCyanBgStyle,
  oneTealTxTwoTealBgStyle,
  oneGreenTxTwoGreenBgStyle,
  oneLimeTxTwoLimeBgStyle,
  oneYellowTxTwoYellowBgStyle,
  oneOrangeTxTwoOrangeBgStyle,
} from "../styles/one-tx-two-bg.css";
import {
  oneTxThemeDefaultBgNavbarButtonPseudoStyle,
  oneTxThemeRedBgNavbarButtonPseudoStyle,
  oneTxThemePinkBgNavbarButtonPseudoStyle,
  oneTxThemeGrapeBgNavbarButtonPseudoStyle,
  oneTxThemeVioletBgNavbarButtonPseudoStyle,
  oneTxThemeIndigoBgNavbarButtonPseudoStyle,
  oneTxThemeBlueBgNavbarButtonPseudoStyle,
  oneTxThemeCyanBgNavbarButtonPseudoStyle,
  oneTxThemeTealBgNavbarButtonPseudoStyle,
  oneTxThemeGreenBgNavbarButtonPseudoStyle,
  oneTxThemeLimeBgNavbarButtonPseudoStyle,
  oneTxThemeYellowBgNavbarButtonPseudoStyle,
  oneTxThemeOrangeBgNavbarButtonPseudoStyle,
} from "../styles/one-tx-theme-bg-navbar-button-pseudo.css";
import {
  oneTxThemeDefaultBgPillPseudoStyle,
  oneTxThemeRedBgPillPseudoStyle,
  oneTxThemePinkBgPillPseudoStyle,
  oneTxThemeGrapeBgPillPseudoStyle,
  oneTxThemeVioletBgPillPseudoStyle,
  oneTxThemeIndigoBgPillPseudoStyle,
  oneTxThemeBlueBgPillPseudoStyle,
  oneTxThemeCyanBgPillPseudoStyle,
  oneTxThemeTealBgPillPseudoStyle,
  oneTxThemeGreenBgPillPseudoStyle,
  oneTxThemeLimeBgPillPseudoStyle,
  oneTxThemeYellowBgPillPseudoStyle,
  oneTxThemeOrangeBgPillPseudoStyle,
} from "../styles/one-tx-theme-bg-pill-pseudo.css";
import {
  getInterFontStyle,
  getReadexProFontStyle,
  getIcebergFontStyle,
  getQuicksandFontStyle,
  getProtestRiotFontStyle,
  getProtestRevolutionFontStyle,
  getJuliusSansOneFontStyle,
  getMansalvaFontStyle,
  getYsabeauScFontStyle,
  getFingerPaintFontStyle,
  getDongleFontStyle,
  getGaeguFontStyle,
  getCarroisGothicScFontStyle,
  getNosiferFontStyle,
  getIcelandFontStyle,
  getTourneyFontStyle,
  getCinzelFontStyle,
  getAlegreyaFontStyle,
  getJosefinSlabFontStyle,
  getCrimsonProFontStyle,
  getQuintessentialFontStyle,
  getMarcellusScFontStyle,
  getZillaSlabHighlightFontStyle,
  getIMFellDwPicaFontStyle,
  getYujiBokuFontStyle,
  getDancingScriptFontStyle,
  getCaveatFontStyle,
  getSatisfyFontStyle,
  getPermanentMarkerFontStyle,
  getKaushanScriptFontStyle,
  getMeriendaFontStyle,
  getParisienneFontStyle,
  getBadScriptFontStyle,
  getNanumPenScriptFontStyle,
  getReenieBeanieFontStyle,
  getMarckScriptFontStyle,
  getNothingYouCouldDoFontStyle,
  getShortStackFontStyle,
  getCaveatBrushFontStyle,
  getNanumBrushScriptFontStyle,
  getLoveYaLikeASisterFontStyle,
  getFondamentoFontStyle,
  getRougeScriptFontStyle,
  getMontezFontStyle,
  getClickerScriptFontStyle,
  getShantellSansFontStyle,
  getSquarePegFontStyle,
  getBangersFontStyle,
  getSpecialEliteFontStyle,
  getAlkatraFontStyle,
  getBarrioFontStyle,
  getJollyLodgerFontStyle,
  getTrainOneFontStyle,
  getNewRockerFontStyle,
  getLacquerFontStyle,
  getRubikWetPaintFontStyle,
  getRubikVinylFontStyle,
  getSourceCodeProFontStyle,
  getCutiveMonoFontStyle,
  getShareTechMonoFontStyle,
} from "../styles/font.styles";

export class GlobalUtility {
  getKeyByValue = (enumObj: any, value: string) => {
    return Object.keys(enumObj).find((key) => enumObj[key] === value);
  };

  formatNumber = (number: number) => {
    if (number >= 1000000000) return (number / 1000000000).toFixed(1) + "B";
    else if (number >= 1000000) return (number / 1000000).toFixed(1) + "M";
    else if (number >= 1000) return (number / 1000).toFixed(1) + "K";
    else return number.toLocaleString();
  };

  getOneTx = (color: Color) => {
    switch (color) {
      case Color.Default:
        return oneDefaultTx;
      case Color.Red:
        return oneRedTx;
      case Color.Pink:
        return onePinkTx;
      case Color.Grape:
        return oneGrapeTx;
      case Color.Violet:
        return oneVioletTx;
      case Color.Indigo:
        return oneIndigoTx;
      case Color.Blue:
        return oneBlueTx;
      case Color.Cyan:
        return oneCyanTx;
      case Color.Teal:
        return oneTealTx;
      case Color.Green:
        return oneGreenTx;
      case Color.Lime:
        return oneLimeTx;
      case Color.Yellow:
        return oneYellowTx;
      case Color.Orange:
        return oneOrangeTx;
      default:
        return oneDefaultTx;
    }
  };

  getOneBg = (color: Color) => {
    switch (color) {
      case Color.Default:
        return oneDefaultBg;
      case Color.Red:
        return oneRedBg;
      case Color.Pink:
        return onePinkBg;
      case Color.Grape:
        return oneGrapeBg;
      case Color.Violet:
        return oneVioletBg;
      case Color.Indigo:
        return oneIndigoBg;
      case Color.Blue:
        return oneBlueBg;
      case Color.Cyan:
        return oneCyanBg;
      case Color.Teal:
        return oneTealBg;
      case Color.Green:
        return oneGreenBg;
      case Color.Lime:
        return oneLimeBg;
      case Color.Yellow:
        return oneYellowBg;
      case Color.Orange:
        return oneOrangeBg;
      default:
        return oneDefaultBg;
    }
  };

  getTwoBg = (color: Color) => {
    switch (color) {
      case Color.Default:
        return twoDefaultBg;
      case Color.Red:
        return twoRedBg;
      case Color.Pink:
        return twoPinkBg;
      case Color.Grape:
        return twoGrapeBg;
      case Color.Violet:
        return twoVioletBg;
      case Color.Indigo:
        return twoIndigoBg;
      case Color.Blue:
        return twoBlueBg;
      case Color.Cyan:
        return twoCyanBg;
      case Color.Teal:
        return twoTealBg;
      case Color.Green:
        return twoGreenBg;
      case Color.Lime:
        return twoLimeBg;
      case Color.Yellow:
        return twoYellowBg;
      case Color.Orange:
        return twoOrangeBg;
      default:
        return twoDefaultBg;
    }
  };

  getThreeTx = (color: Color) => {
    switch (color) {
      case Color.Default:
        return threeDefaultTx;
      case Color.Red:
        return threeRedTx;
      case Color.Pink:
        return threePinkTx;
      case Color.Grape:
        return threeGrapeTx;
      case Color.Violet:
        return threeVioletTx;
      case Color.Indigo:
        return threeIndigoTx;
      case Color.Blue:
        return threeBlueTx;
      case Color.Cyan:
        return threeCyanTx;
      case Color.Teal:
        return threeTealTx;
      case Color.Green:
        return threeGreenTx;
      case Color.Lime:
        return threeLimeTx;
      case Color.Yellow:
        return threeYellowTx;
      case Color.Orange:
        return threeOrangeTx;
      default:
        return threeDefaultTx;
    }
  };

  getFiveTx = (color: Color) => {
    switch (color) {
      case Color.Default:
        return fiveDefaultTx;
      case Color.Red:
        return fiveRedTx;
      case Color.Pink:
        return fivePinkTx;
      case Color.Grape:
        return fiveGrapeTx;
      case Color.Violet:
        return fiveVioletTx;
      case Color.Indigo:
        return fiveIndigoTx;
      case Color.Blue:
        return fiveBlueTx;
      case Color.Cyan:
        return fiveCyanTx;
      case Color.Teal:
        return fiveTealTx;
      case Color.Green:
        return fiveGreenTx;
      case Color.Lime:
        return fiveLimeTx;
      case Color.Yellow:
        return fiveYellowTx;
      case Color.Orange:
        return fiveOrangeTx;
      default:
        return fiveDefaultTx;
    }
  };

  getThreeBg = (color: Color) => {
    switch (color) {
      case Color.Default:
        return threeDefaultBg;
      case Color.Red:
        return threeRedBg;
      case Color.Pink:
        return threePinkBg;
      case Color.Grape:
        return threeGrapeBg;
      case Color.Violet:
        return threeVioletBg;
      case Color.Indigo:
        return threeIndigoBg;
      case Color.Blue:
        return threeBlueBg;
      case Color.Cyan:
        return threeCyanBg;
      case Color.Teal:
        return threeTealBg;
      case Color.Green:
        return threeGreenBg;
      case Color.Lime:
        return threeLimeBg;
      case Color.Yellow:
        return threeYellowBg;
      case Color.Orange:
        return threeOrangeBg;
      default:
        return threeDefaultBg;
    }
  };

  getOneTxOneBgStyle = (color: Color) => {
    switch (color) {
      case Color.Default:
        return oneDefaultTxOneDefaultBgStyle;
      case Color.Red:
        return oneRedTxOneRedBgStyle;
      case Color.Pink:
        return onePinkTxOnePinkBgStyle;
      case Color.Grape:
        return oneGrapeTxOneGrapeBgStyle;
      case Color.Violet:
        return oneVioletTxOneVioletBgStyle;
      case Color.Indigo:
        return oneIndigoTxOneIndigoBgStyle;
      case Color.Blue:
        return oneBlueTxOneBlueBgStyle;
      case Color.Cyan:
        return oneCyanTxOneCyanBgStyle;
      case Color.Teal:
        return oneTealTxOneTealBgStyle;
      case Color.Green:
        return oneGreenTxOneGreenBgStyle;
      case Color.Lime:
        return oneLimeTxOneLimeBgStyle;
      case Color.Yellow:
        return oneYellowTxOneYellowBgStyle;
      case Color.Orange:
        return oneOrangeTxOneOrangeBgStyle;
      default:
        return oneDefaultTxOneDefaultBgStyle;
    }
  };

  getOneTxTwoBgStyle = (color: Color) => {
    switch (color) {
      case Color.Default:
        return oneDefaultTxTwoDefaultBgStyle;
      case Color.Red:
        return oneRedTxTwoRedBgStyle;
      case Color.Pink:
        return onePinkTxTwoPinkBgStyle;
      case Color.Grape:
        return oneGrapeTxTwoGrapeBgStyle;
      case Color.Violet:
        return oneVioletTxTwoVioletBgStyle;
      case Color.Indigo:
        return oneIndigoTxTwoIndigoBgStyle;
      case Color.Blue:
        return oneBlueTxTwoBlueBgStyle;
      case Color.Cyan:
        return oneCyanTxTwoCyanBgStyle;
      case Color.Teal:
        return oneTealTxTwoTealBgStyle;
      case Color.Green:
        return oneGreenTxTwoGreenBgStyle;
      case Color.Lime:
        return oneLimeTxTwoLimeBgStyle;
      case Color.Yellow:
        return oneYellowTxTwoYellowBgStyle;
      case Color.Orange:
        return oneOrangeTxTwoOrangeBgStyle;
      default:
        return oneDefaultTxTwoDefaultBgStyle;
    }
  };

  getThemeBg = (color: Color) => {
    switch (color) {
      case Color.Default:
        return themeDefaultBg;
      case Color.Red:
        return themeRedBg;
      case Color.Pink:
        return themePinkBg;
      case Color.Grape:
        return themeGrapeBg;
      case Color.Violet:
        return themeVioletBg;
      case Color.Indigo:
        return themeIndigoBg;
      case Color.Blue:
        return themeBlueBg;
      case Color.Cyan:
        return themeCyanBg;
      case Color.Teal:
        return themeTealBg;
      case Color.Green:
        return themeGreenBg;
      case Color.Lime:
        return themeLimeBg;
      case Color.Yellow:
        return themeYellowBg;
      case Color.Orange:
        return themeOrangeBg;
      default:
        return themeYellowBg;
    }
  };

  getThemeTxPseudoStyle = (color: Color) => {
    switch (color) {
      case Color.Default:
        return themeDefaultTxPseudoStyle;
      case Color.Red:
        return themeRedTxPseudoStyle;
      case Color.Pink:
        return themePinkTxPseudoStyle;
      case Color.Grape:
        return themeGrapeTxPseudoStyle;
      case Color.Violet:
        return themeVioletTxPseudoStyle;
      case Color.Indigo:
        return themeIndigoTxPseudoStyle;
      case Color.Blue:
        return themeBlueTxPseudoStyle;
      case Color.Cyan:
        return themeCyanTxPseudoStyle;
      case Color.Teal:
        return themeTealTxPseudoStyle;
      case Color.Green:
        return themeGreenTxPseudoStyle;
      case Color.Lime:
        return themeLimeTxPseudoStyle;
      case Color.Yellow:
        return themeYellowTxPseudoStyle;
      case Color.Orange:
        return themeOrangeTxPseudoStyle;
      default:
        return themeDefaultTxPseudoStyle;
    }
  };

  getOneTxThemeBgNavbarButtonPseudoStyle = (color: Color) => {
    switch (color) {
      case Color.Default:
        return oneTxThemeDefaultBgNavbarButtonPseudoStyle;
      case Color.Red:
        return oneTxThemeRedBgNavbarButtonPseudoStyle;
      case Color.Pink:
        return oneTxThemePinkBgNavbarButtonPseudoStyle;
      case Color.Grape:
        return oneTxThemeGrapeBgNavbarButtonPseudoStyle;
      case Color.Violet:
        return oneTxThemeVioletBgNavbarButtonPseudoStyle;
      case Color.Indigo:
        return oneTxThemeIndigoBgNavbarButtonPseudoStyle;
      case Color.Blue:
        return oneTxThemeBlueBgNavbarButtonPseudoStyle;
      case Color.Cyan:
        return oneTxThemeCyanBgNavbarButtonPseudoStyle;
      case Color.Teal:
        return oneTxThemeTealBgNavbarButtonPseudoStyle;
      case Color.Green:
        return oneTxThemeGreenBgNavbarButtonPseudoStyle;
      case Color.Lime:
        return oneTxThemeLimeBgNavbarButtonPseudoStyle;
      case Color.Yellow:
        return oneTxThemeYellowBgNavbarButtonPseudoStyle;
      case Color.Orange:
        return oneTxThemeOrangeBgNavbarButtonPseudoStyle;
      default:
        return oneTxThemeYellowBgNavbarButtonPseudoStyle;
    }
  };

  getOneTxThemeBgPillButtonPseudoStyle = (color: Color) => {
    switch (color) {
      case Color.Default:
        return oneTxThemeDefaultBgPillPseudoStyle;
      case Color.Red:
        return oneTxThemeRedBgPillPseudoStyle;
      case Color.Pink:
        return oneTxThemePinkBgPillPseudoStyle;
      case Color.Grape:
        return oneTxThemeGrapeBgPillPseudoStyle;
      case Color.Violet:
        return oneTxThemeVioletBgPillPseudoStyle;
      case Color.Indigo:
        return oneTxThemeIndigoBgPillPseudoStyle;
      case Color.Blue:
        return oneTxThemeBlueBgPillPseudoStyle;
      case Color.Cyan:
        return oneTxThemeCyanBgPillPseudoStyle;
      case Color.Teal:
        return oneTxThemeTealBgPillPseudoStyle;
      case Color.Green:
        return oneTxThemeGreenBgPillPseudoStyle;
      case Color.Lime:
        return oneTxThemeLimeBgPillPseudoStyle;
      case Color.Yellow:
        return oneTxThemeYellowBgPillPseudoStyle;
      case Color.Orange:
        return oneTxThemeOrangeBgPillPseudoStyle;
      default:
        return oneTxThemeYellowBgPillPseudoStyle;
    }
  };

  getFont = (font: Font, isMobile: boolean) => {
    switch (font) {
      case Font["Inter"]:
        return getInterFontStyle(isMobile);
      case Font["Readex Pro"]:
        return getReadexProFontStyle(isMobile);
      case Font["Iceberg"]:
        return getIcebergFontStyle(isMobile);
      case Font["Quicksand"]:
        return getQuicksandFontStyle(isMobile);
      case Font["Protest Riot"]:
        return getProtestRiotFontStyle(isMobile);
      case Font["Protest Revolution"]:
        return getProtestRevolutionFontStyle(isMobile);
      case Font["Julius Sans One"]:
        return getJuliusSansOneFontStyle(isMobile);
      case Font["Mansalva"]:
        return getMansalvaFontStyle(isMobile);
      case Font["Ysabeau SC"]:
        return getYsabeauScFontStyle(isMobile);
      case Font["Finger Paint"]:
        return getFingerPaintFontStyle(isMobile);
      case Font["Dongle"]:
        return getDongleFontStyle(isMobile);
      case Font["Gaegu"]:
        return getGaeguFontStyle(isMobile);
      case Font["Carrois Gothic SC"]:
        return getCarroisGothicScFontStyle(isMobile);
      case Font["Nosifer"]:
        return getNosiferFontStyle(isMobile);
      case Font["Iceland"]:
        return getIcelandFontStyle(isMobile);
      case Font["Tourney"]:
        return getTourneyFontStyle(isMobile);
      case Font["Cinzel"]:
        return getCinzelFontStyle(isMobile);
      case Font["Alegreya"]:
        return getAlegreyaFontStyle(isMobile);
      case Font["Josefin Slab"]:
        return getJosefinSlabFontStyle(isMobile);
      case Font["Crimson Pro"]:
        return getCrimsonProFontStyle(isMobile);
      case Font["Quintessential"]:
        return getQuintessentialFontStyle(isMobile);
      case Font["Marcellus SC"]:
        return getMarcellusScFontStyle(isMobile);
      case Font["Zilla Slab Highlight"]:
        return getZillaSlabHighlightFontStyle(isMobile);
      case Font["IM Fell DW Pica"]:
        return getIMFellDwPicaFontStyle(isMobile);
      case Font["Yuji Boku"]:
        return getYujiBokuFontStyle(isMobile);
      case Font["Dancing Script"]:
        return getDancingScriptFontStyle(isMobile);
      case Font["Caveat"]:
        return getCaveatFontStyle(isMobile);
      case Font["Satisfy"]:
        return getSatisfyFontStyle(isMobile);
      case Font["Permanent Marker"]:
        return getPermanentMarkerFontStyle(isMobile);
      case Font["Kaushan Script"]:
        return getKaushanScriptFontStyle(isMobile);
      case Font["Merienda"]:
        return getMeriendaFontStyle(isMobile);
      case Font["Parisienne"]:
        return getParisienneFontStyle(isMobile);
      case Font["Bad Script"]:
        return getBadScriptFontStyle(isMobile);
      case Font["Nanum Pen Script"]:
        return getNanumPenScriptFontStyle(isMobile);
      case Font["Reenie Beanie"]:
        return getReenieBeanieFontStyle(isMobile);
      case Font["Marck Script"]:
        return getMarckScriptFontStyle(isMobile);
      case Font["Nothing You Could Do"]:
        return getNothingYouCouldDoFontStyle(isMobile);
      case Font["Short Stack"]:
        return getShortStackFontStyle(isMobile);
      case Font["Caveat Brush"]:
        return getCaveatBrushFontStyle(isMobile);
      case Font["Nanum Brush Script"]:
        return getNanumBrushScriptFontStyle(isMobile);
      case Font["Love Ya Like A Sister"]:
        return getLoveYaLikeASisterFontStyle(isMobile);
      case Font["Fondamento"]:
        return getFondamentoFontStyle(isMobile);
      case Font["Rouge Script"]:
        return getRougeScriptFontStyle(isMobile);
      case Font["Montez"]:
        return getMontezFontStyle(isMobile);
      case Font["Clicker Script"]:
        return getClickerScriptFontStyle(isMobile);
      case Font["Shantell Sans"]:
        return getShantellSansFontStyle(isMobile);
      case Font["Square Peg"]:
        return getSquarePegFontStyle(isMobile);
      case Font["Bangers"]:
        return getBangersFontStyle(isMobile);
      case Font["Special Elite"]:
        return getSpecialEliteFontStyle(isMobile);
      case Font["Alkatra"]:
        return getAlkatraFontStyle(isMobile);
      case Font["Barrio"]:
        return getBarrioFontStyle(isMobile);
      case Font["Jolly Lodger"]:
        return getJollyLodgerFontStyle(isMobile);
      case Font["Train One"]:
        return getTrainOneFontStyle(isMobile);
      case Font["New Rocker"]:
        return getNewRockerFontStyle(isMobile);
      case Font["Lacquer"]:
        return getLacquerFontStyle(isMobile);
      case Font["Rubik Wet Paint"]:
        return getRubikWetPaintFontStyle(isMobile);
      case Font["Rubik Vinyl"]:
        return getRubikVinylFontStyle(isMobile);
      case Font["Source Code Pro"]:
        return getSourceCodeProFontStyle(isMobile);
      case Font["Cutive Mono"]:
        return getCutiveMonoFontStyle(isMobile);
      case Font["Share Tech Mono"]:
        return getShareTechMonoFontStyle(isMobile);
      default:
        return getInterFontStyle(isMobile);
    }
  };

  getFontType = (font: Font) => {
    if (
      font === Font["Inter"] ||
      font === Font["Readex Pro"] ||
      font === Font["Quicksand"] ||
      font === Font["Dongle"] ||
      font === Font["Alegreya"] ||
      font === Font["Shantell Sans"] ||
      font === Font["Iceberg"] ||
      font === Font["Ysabeau SC"] ||
      font === Font["Finger Paint"] ||
      font === Font["Carrois Gothic SC"] ||
      font === Font["Iceland"] ||
      font === Font["Josefin Slab"] ||
      font === Font["Crimson Pro"] ||
      font === Font["Quintessential"] ||
      font === Font["IM Fell DW Pica"] ||
      font === Font["Permanent Marker"] ||
      font === Font["Kaushan Script"] ||
      font === Font["Merienda"] ||
      font === Font["Bad Script"] ||
      font === Font["Nanum Pen Script"] ||
      font === Font["Short Stack"] ||
      font === Font["Nanum Brush Script"] ||
      font === Font["Rouge Script"] ||
      font === Font["Alkatra"] ||
      font === Font["Lacquer"] ||
      font === Font["Source Code Pro"]
    )
      return "smallFont";

    return "largeFont";
  };
}

export default GlobalUtility;
export const globalUtility = new GlobalUtility();
