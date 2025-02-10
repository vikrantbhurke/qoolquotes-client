import { themeToVars } from "@mantine/vanilla-extract";
import { interFontStyle } from "./app.css";
import { oneDefaultTx, threeDefaultBg } from "./renamed.variables";
import {
  Text,
  createTheme,
  Pagination,
  Title,
  TextInput,
  Textarea,
  ActionIcon,
  PasswordInput,
  Button,
  Combobox,
  Pill,
} from "@mantine/core";

export const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: oneDefaultTx,
        className: interFontStyle,
        radius: 8,
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: {
        bg: "transparent",
        c: oneDefaultTx,
        size: "xs",
      },
    }),

    Text: Text.extend({
      defaultProps: {
        color: oneDefaultTx,
        className: interFontStyle,
      },
    }),

    Textarea: Textarea.extend({
      defaultProps: {
        color: oneDefaultTx,
        radius: "md",
        className: interFontStyle,
      },
    }),

    TextInput: TextInput.extend({
      defaultProps: {
        color: oneDefaultTx,
        radius: "md",
        className: interFontStyle,
      },
    }),

    ComboboxOption: Combobox.Option.extend({
      defaultProps: {
        className: interFontStyle,
      },
    }),

    PasswordInput: PasswordInput.extend({
      defaultProps: {
        color: oneDefaultTx,
        radius: "md",
        className: interFontStyle,
      },
    }),

    Title: Title.extend({
      defaultProps: {
        c: oneDefaultTx,
        className: interFontStyle,
      },
    }),

    Pill: Pill.extend({
      defaultProps: {
        className: interFontStyle,
      },
    }),

    Pagination: Pagination.extend({
      defaultProps: {
        size: "sm",
        m: "xs",
        radius: "sm",
        siblings: 0,
      },

      styles: {
        control: {
          color: oneDefaultTx,
          backgroundColor: threeDefaultBg,
          border: "none",
          className: interFontStyle,
        },
      },
    }),
  },
});

export const vars = themeToVars(theme);
