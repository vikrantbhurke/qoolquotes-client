import { Font } from "../enums";
import {
  interFontStyle,
  readexProFontStyle,
  silkScreenFontStyle,
  icebergFontStyle,
  amaticScFontStyle,
  quicksandFontStyle,
  protestRiotFontStyle,
  protestRevolutionFontStyle,
  juliusSansOneFontStyle,
  mansalvaFontStyle,
  ysabeauScFontStyle,
  fingerPaintFontStyle,
  dongleFontStyle,
  gaeguFontStyle,
  carroisGothicScFontStyle,
  nosiferFontStyle,
  bungeeHairlineFontStyle,
  icelandFontStyle,
  tourneyFontStyle,
  cinzelFontStyle,
  alegreyaFontStyle,
  josefinSlabFontStyle,
  crimsonProFontStyle,
  quintessentialFontStyle,
  marcellusScFontStyle,
  ryeFontStyle,
  zillaSlabHighlightFontStyle,
  imFellDwPicaFontStyle,
  jacquesFrancoisShadowFontStyle,
  yujiBokuFontStyle,
  dancingScriptFontStyle,
  caveatFontStyle,
  satisfyFontStyle,
  permanentMarkerFontStyle,
  kaushanScriptFontStyle,
  meriendaFontStyle,
  parisienneFontStyle,
  badScriptFontStyle,
  nanumPenScriptFontStyle,
  reenieBeanieFontStyle,
  marckScriptFontStyle,
  nothingYouCouldDoFontStyle,
  shortStackFontStyle,
  caveatBrushFontStyle,
  nanumBrushScriptFontStyle,
  loveYaLikeASisterFontStyle,
  fondamentoFontStyle,
  rougeScriptFontStyle,
  montezFontStyle,
  clickerScriptFontStyle,
  shantellSansFontStyle,
  squarePegFontStyle,
  bangersFontStyle,
  specialEliteFontStyle,
  alkatraFontStyle,
  barrioFontStyle,
  jollyLodgerFontStyle,
  trainOneFontStyle,
  newRockerFontStyle,
  lacquerFontStyle,
  rubikWetPaintFontStyle,
  rubikVinylFontStyle,
  sourceCodeProFontStyle,
  cutiveMonoFontStyle,
  shareTechMonoFontStyle,
} from "../styles/app.css";

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

  getFont = (font: Font) => {
    switch (font) {
      case Font["Inter"]:
        return interFontStyle;
      case Font["Readex Pro"]:
        return readexProFontStyle;
      case Font["Silk Screen"]:
        return silkScreenFontStyle;
      case Font["Iceberg"]:
        return icebergFontStyle;
      case Font["Amatic SC"]:
        return amaticScFontStyle;
      case Font["Quicksand"]:
        return quicksandFontStyle;
      case Font["Protest Riot"]:
        return protestRiotFontStyle;
      case Font["Protest Revolution"]:
        return protestRevolutionFontStyle;
      case Font["Julius Sans One"]:
        return juliusSansOneFontStyle;
      case Font["Mansalva"]:
        return mansalvaFontStyle;
      case Font["Ysabeau SC"]:
        return ysabeauScFontStyle;
      case Font["Finger Paint"]:
        return fingerPaintFontStyle;
      case Font["Dongle"]:
        return dongleFontStyle;
      case Font["Gaegu"]:
        return gaeguFontStyle;
      case Font["Carrois Gothic SC"]:
        return carroisGothicScFontStyle;
      case Font["Nosifer"]:
        return nosiferFontStyle;
      case Font["Bungee Hairline"]:
        return bungeeHairlineFontStyle;
      case Font["Iceland"]:
        return icelandFontStyle;
      case Font["Tourney"]:
        return tourneyFontStyle;
      case Font["Cinzel"]:
        return cinzelFontStyle;
      case Font["Alegreya"]:
        return alegreyaFontStyle;
      case Font["Josefin Slab"]:
        return josefinSlabFontStyle;
      case Font["Crimson Pro"]:
        return crimsonProFontStyle;
      case Font["Quintessential"]:
        return quintessentialFontStyle;
      case Font["Marcellus SC"]:
        return marcellusScFontStyle;
      case Font["Rye"]:
        return ryeFontStyle;
      case Font["Zilla Slab Highlight"]:
        return zillaSlabHighlightFontStyle;
      case Font["IM Fell DW Pica"]:
        return imFellDwPicaFontStyle;
      case Font["Jacques Francois Shadow"]:
        return jacquesFrancoisShadowFontStyle;
      case Font["Yuji Boku"]:
        return yujiBokuFontStyle;
      case Font["Dancing Script"]:
        return dancingScriptFontStyle;
      case Font["Caveat"]:
        return caveatFontStyle;
      case Font["Satisfy"]:
        return satisfyFontStyle;
      case Font["Permanent Marker"]:
        return permanentMarkerFontStyle;
      case Font["Kaushan Script"]:
        return kaushanScriptFontStyle;
      case Font["Merienda"]:
        return meriendaFontStyle;
      case Font["Parisienne"]:
        return parisienneFontStyle;
      case Font["Bad Script"]:
        return badScriptFontStyle;
      case Font["Nanum Pen Script"]:
        return nanumPenScriptFontStyle;
      case Font["Reenie Beanie"]:
        return reenieBeanieFontStyle;
      case Font["Marck Script"]:
        return marckScriptFontStyle;
      case Font["Nothing You Could Do"]:
        return nothingYouCouldDoFontStyle;
      case Font["Short Stack"]:
        return shortStackFontStyle;
      case Font["Caveat Brush"]:
        return caveatBrushFontStyle;
      case Font["Nanum Brush Script"]:
        return nanumBrushScriptFontStyle;
      case Font["Love Ya Like A Sister"]:
        return loveYaLikeASisterFontStyle;
      case Font["Fondamento"]:
        return fondamentoFontStyle;
      case Font["Rouge Script"]:
        return rougeScriptFontStyle;
      case Font["Montez"]:
        return montezFontStyle;
      case Font["Clicker Script"]:
        return clickerScriptFontStyle;
      case Font["Shantell Sans"]:
        return shantellSansFontStyle;
      case Font["Square Peg"]:
        return squarePegFontStyle;
      case Font["Bangers"]:
        return bangersFontStyle;
      case Font["Special Elite"]:
        return specialEliteFontStyle;
      case Font["Alkatra"]:
        return alkatraFontStyle;
      case Font["Barrio"]:
        return barrioFontStyle;
      case Font["Jolly Lodger"]:
        return jollyLodgerFontStyle;
      case Font["Train One"]:
        return trainOneFontStyle;
      case Font["New Rocker"]:
        return newRockerFontStyle;
      case Font["Lacquer"]:
        return lacquerFontStyle;
      case Font["Rubik Wet Paint"]:
        return rubikWetPaintFontStyle;
      case Font["Rubik Vinyl"]:
        return rubikVinylFontStyle;
      case Font["Source Code Pro"]:
        return sourceCodeProFontStyle;
      case Font["Cutive Mono"]:
        return cutiveMonoFontStyle;
      case Font["Share Tech Mono"]:
        return shareTechMonoFontStyle;
      default:
        return interFontStyle;
    }
  };
}

export default GlobalUtility;
export const globalUtility = new GlobalUtility();
