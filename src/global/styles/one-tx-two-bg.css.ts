import { vars } from "./theme";
import { style } from "@vanilla-extract/css";
import {
  oneTx,
  oneGrayTx,
  oneRedTx,
  onePinkTx,
  oneGrapeTx,
  oneVioletTx,
  oneIndigoTx,
  oneBlueTx,
  oneCyanTx,
  oneTealTx,
  oneGreenTx,
  oneLimeTx,
  oneYellowTx,
  oneOrangeTx,
  twoBg,
  twoGrayBg,
  twoRedBg,
  twoPinkBg,
  twoGrapeBg,
  twoVioletBg,
  twoIndigoBg,
  twoBlueBg,
  twoCyanBg,
  twoTealBg,
  twoGreenBg,
  twoLimeBg,
  twoYellowBg,
  twoOrangeBg,
} from "./renamed.variables";

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

export const oneGrayTxTwoGrayBgStyle = style({
  color: oneGrayTx,
  backgroundColor: twoGrayBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneGrayTx,
      backgroundColor: twoGrayBg,
    },
  },
});

export const oneRedTxTwoRedBgStyle = style({
  color: oneRedTx,
  backgroundColor: twoRedBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneRedTx,
      backgroundColor: twoRedBg,
    },
  },
});

export const onePinkTxTwoPinkBgStyle = style({
  color: onePinkTx,
  backgroundColor: twoPinkBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: onePinkTx,
      backgroundColor: twoPinkBg,
    },
  },
});

export const oneGrapeTxTwoGrapeBgStyle = style({
  color: oneGrapeTx,
  backgroundColor: twoGrapeBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneGrapeTx,
      backgroundColor: twoGrapeBg,
    },
  },
});

export const oneVioletTxTwoVioletBgStyle = style({
  color: oneVioletTx,
  backgroundColor: twoVioletBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneVioletTx,
      backgroundColor: twoVioletBg,
    },
  },
});

export const oneIndigoTxTwoIndigoBgStyle = style({
  color: oneIndigoTx,
  backgroundColor: twoIndigoBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneIndigoTx,
      backgroundColor: twoIndigoBg,
    },
  },
});

export const oneBlueTxTwoBlueBgStyle = style({
  color: oneBlueTx,
  backgroundColor: twoBlueBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneBlueTx,
      backgroundColor: twoBlueBg,
    },
  },
});

export const oneCyanTxTwoCyanBgStyle = style({
  color: oneCyanTx,
  backgroundColor: twoCyanBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneCyanTx,
      backgroundColor: twoCyanBg,
    },
  },
});

export const oneTealTxTwoTealBgStyle = style({
  color: oneTealTx,
  backgroundColor: twoTealBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneTealTx,
      backgroundColor: twoTealBg,
    },
  },
});

export const oneGreenTxTwoGreenBgStyle = style({
  color: oneGreenTx,
  backgroundColor: twoGreenBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneGreenTx,
      backgroundColor: twoGreenBg,
    },
  },
});

export const oneLimeTxTwoLimeBgStyle = style({
  color: oneLimeTx,
  backgroundColor: twoLimeBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneLimeTx,
      backgroundColor: twoLimeBg,
    },
  },
});

export const oneYellowTxTwoYellowBgStyle = style({
  color: oneYellowTx,
  backgroundColor: twoYellowBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneYellowTx,
      backgroundColor: twoYellowBg,
    },
  },
});

export const oneOrangeTxTwoOrangeBgStyle = style({
  color: oneOrangeTx,
  backgroundColor: twoOrangeBg,
  fontFamily: "Inter",

  selectors: {
    [vars.darkSelector]: {
      color: oneOrangeTx,
      backgroundColor: twoOrangeBg,
    },
  },
});
