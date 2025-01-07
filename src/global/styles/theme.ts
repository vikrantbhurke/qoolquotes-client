import { themeToVars } from "@mantine/vanilla-extract";
import { oneTx, readexProFont, threeBg } from "./app.css";
import {
  Button,
  Text,
  createTheme,
  Pagination,
  Title,
  TextInput,
  Textarea,
  ActionIcon,
  Pill,
} from "@mantine/core";

export const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: oneTx,
        className: readexProFont,
        fw: 300,
        radius: 10,
        h: "3rem",
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: {
        bg: "transparent",
        c: oneTx,
        size: "xs",
      },
    }),

    Pill: Pill.extend({
      defaultProps: {
        fw: 300,
      },
    }),

    Text: Text.extend({
      defaultProps: {
        color: oneTx,
        className: readexProFont,
        fw: 300,
        fz: "sm",
      },
    }),

    Textarea: Textarea.extend({
      defaultProps: {
        className: readexProFont,
        color: oneTx,
        radius: "sm",
      },
    }),

    TextInput: TextInput.extend({
      defaultProps: {
        className: readexProFont,
        color: oneTx,
        radius: "sm",
      },
    }),

    Title: Title.extend({
      defaultProps: {
        c: oneTx,
        className: readexProFont,
        fw: 600,
      },
    }),

    Pagination: Pagination.extend({
      styles: {
        control: {
          color: oneTx,
          backgroundColor: threeBg,
          border: "none",
          fontWeight: 200,
        },
      },
    }),
  },
});

export const vars = themeToVars(theme);
