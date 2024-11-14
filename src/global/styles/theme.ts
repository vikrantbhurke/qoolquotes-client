import { Button, createTheme, Pagination } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";
import { borderStyle, oneTx, threeBg } from "./app.css";

export const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: oneTx,
      },
    }),

    Pagination: Pagination.extend({
      styles: {
        control: {
          padding: 16,
          borderRadius: "10%",
          color: `${oneTx}`,
          backgroundColor: `${threeBg}`,
          border: borderStyle,
        },
      },
    }),
  },
});

export const vars = themeToVars(theme);
