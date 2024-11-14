import { vars } from "./theme";
import { style } from "@vanilla-extract/css";

export const oneTx = "var(--primary-text)";
export const oneBg = "var(--primary-background)";
export const twoTx = "var(--secondary-text)";
export const twoBg = "var(--secondary-background)";
export const threeTx = "var(--tertiary-text)";
export const threeBg = "var(--tertiary-background)";
export const borderColor = "var(--border-color)";

export const borderStyle = `1px solid ${borderColor}`;

export const roundBorder = style({
  borderRadius: vars.radius.xl,
});

export const oneTxOneBg = style({
  color: oneTx,
  backgroundColor: oneBg,

  selectors: {
    [vars.darkSelector]: {
      color: oneTx,
      backgroundColor: oneBg,
    },
  },
});

export const normalPseudo = style({
  color: oneTx,
  backgroundColor: oneBg,
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

export const buttonPseudo = style({
  color: oneTx,
  backgroundColor: oneBg,
  borderBottom: borderStyle,
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

export const readexProFont = style({
  fontFamily: "Readex Pro",
});
