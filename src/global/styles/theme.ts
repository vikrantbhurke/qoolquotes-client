import { themeToVars } from "@mantine/vanilla-extract";
import { interFontStyle, oneTx, threeBg } from "./app.css";
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
        color: oneTx,
        className: interFontStyle,
        radius: 8,
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: {
        bg: "transparent",
        c: oneTx,
        size: "xs",
      },
    }),

    Text: Text.extend({
      defaultProps: {
        color: oneTx,
        fz: "sm",
        className: interFontStyle,
      },
    }),

    Textarea: Textarea.extend({
      defaultProps: {
        color: oneTx,
        radius: "md",
        className: interFontStyle,
      },
    }),

    TextInput: TextInput.extend({
      defaultProps: {
        color: oneTx,
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
        color: oneTx,
        radius: "md",
        className: interFontStyle,
      },
    }),

    Title: Title.extend({
      defaultProps: {
        c: oneTx,
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
          color: oneTx,
          backgroundColor: threeBg,
          border: "none",
          className: interFontStyle,
        },
      },
    }),
  },
});

export const vars = themeToVars(theme);
