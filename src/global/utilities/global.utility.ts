import { Font } from "../enums";
import { interFontStyle, readexProFontStyle } from "../styles/app.css";

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
    return font === Font.Inter ? interFontStyle : readexProFontStyle;
  };
}

export default GlobalUtility;
export const globalUtility = new GlobalUtility();
