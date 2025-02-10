import { LCBorder } from "./renamed.variables";
import { vars } from "./theme";
import { style } from "@vanilla-extract/css";

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

export const interFontStyle = style({
  fontFamily: "Inter",
});
