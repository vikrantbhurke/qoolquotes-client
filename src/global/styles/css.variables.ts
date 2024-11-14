import { CSSVariablesResolver, lighten, darken } from "@mantine/core";

export const Black = "#000000";
export const Darker = lighten("#000000", 0.04);
export const Dark = lighten("#000000", 0.08);
export const DarkBorder = "#111";
export const White = "#FFFFFF";
export const Lighter = darken("#FFFFFF", 0.04);
export const Light = darken("#FFFFFF", 0.08);
export const LightBorder = "#CCCCCC";

export const resolveCssVariables: CSSVariablesResolver = () => cssVariables();

export const cssVariables = () => {
  return {
    variables: {
      "--theme-primary": "#000",
    },
    light: {
      "--primary-text": Black,
      "--primary-background": White,
      "--secondary-text": Darker,
      "--secondary-background": Lighter,
      "--tertiary-text": Dark,
      "--tertiary-background": Light,
      "--border-color": LightBorder,
    },
    dark: {
      "--primary-text": White,
      "--primary-background": Black,
      "--secondary-text": Lighter,
      "--secondary-background": Darker,
      "--tertiary-text": Light,
      "--tertiary-background": Dark,
      "--border-color": DarkBorder,
    },
  };
};
