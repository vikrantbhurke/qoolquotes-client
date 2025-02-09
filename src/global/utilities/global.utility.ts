import { Font } from "../enums";
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
  getBungeeHairlineFontStyle,
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
      case Font["Bungee Hairline"]:
        return getBungeeHairlineFontStyle(isMobile);
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
}

export default GlobalUtility;
export const globalUtility = new GlobalUtility();
