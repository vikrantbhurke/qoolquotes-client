import {
  oneDefaultBg,
  oneDefaultTx,
  threeDefaultBg,
  twoDefaultBg,
} from "./renamed.variables";
import { vars } from "./theme";
import { style } from "@vanilla-extract/css";

export const oneTxOneBgButtonPseudoStyle = style({
  color: oneDefaultTx,
  backgroundColor: oneDefaultBg,
  fontFamily: "Inter",

  ":hover": {
    color: oneDefaultTx,
    backgroundColor: twoDefaultBg,
  },
  ":active": {
    color: oneDefaultTx,
    backgroundColor: threeDefaultBg,
  },
  ":focus": {
    color: oneDefaultTx,
    backgroundColor: threeDefaultBg,
  },

  selectors: {
    [vars.darkSelector]: {
      color: oneDefaultTx,
      backgroundColor: oneDefaultBg,
    },
    [`${vars.darkSelector}:hover`]: {
      color: oneDefaultTx,
      backgroundColor: twoDefaultBg,
    },
    [`${vars.darkSelector}:active`]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
    [`${vars.darkSelector}:focus`]: {
      color: oneDefaultTx,
      backgroundColor: threeDefaultBg,
    },
  },
});
