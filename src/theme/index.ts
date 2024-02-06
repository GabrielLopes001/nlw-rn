import { createBox, createText, createTheme } from "@shopify/restyle";

import { colors } from "./colors";
import { spacing } from "./spacing"
import { textVariants } from "./textVariants";

export const theme = createTheme({
   colors,
   spacing,
   textVariants,
   borderRadii: {
      "full": 9999
   },
   breakpoints: {},
});

type ThemeProps = typeof theme;

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>();

export { ThemeProps, Box, Text}