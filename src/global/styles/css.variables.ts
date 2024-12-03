import { CSSVariablesResolver, lighten, darken } from "@mantine/core";

export const DarkOne = "#09090B";
export const DarkTwo = lighten("#09090B", 0.01);
export const DarkThree = lighten("#09090B", 0.02);
export const DarkFour = lighten("#09090B", 0.03);
export const DarkFive = lighten("#09090B", 0.04);
export const DarkBorder = lighten("#09090B", 0.07);
export const LightOne = "#FFFFFF";
export const LightTwo = darken("#F8FAFD", 0.03);
export const LightThree = darken("#F8FAFD", 0.07);
export const LightFour = darken("#F8FAFD", 0.11);
export const LightFive = darken("#F8FAFD", 0.15);
export const LightBorder = darken("#F8FAFD", 0.07);

export const resolveCssVariables: CSSVariablesResolver = () => cssVariables();

export const cssVariables = () => {
  return {
    variables: {
      "--theme-primary": "#000",
      "--theme-green": "#2FBAAA",
    },
    light: {
      "--primary-text": DarkOne,
      "--primary-background": LightOne,
      "--secondary-text": DarkTwo,
      "--secondary-background": LightTwo,
      "--tertiary-text": DarkThree,
      "--tertiary-background": LightThree,
      "--quaternary-text": DarkFour,
      "--quaternary-background": LightFour,
      "--quinary-text": DarkFive,
      "--quinary-background": LightFive,
      "--border-color": LightBorder,
    },
    dark: {
      "--primary-text": LightOne,
      "--primary-background": DarkOne,
      "--secondary-text": LightTwo,
      "--secondary-background": DarkTwo,
      "--tertiary-text": LightThree,
      "--tertiary-background": DarkThree,
      "--quaternary-text": LightFour,
      "--quaternary-background": DarkFour,
      "--quinary-text": LightFive,
      "--quinary-background": DarkFive,
      "--border-color": DarkBorder,
    },
  };
};
