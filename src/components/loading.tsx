import { ActivityIndicator } from "react-native";
import { Box, ThemeProps } from "../theme";
import { useTheme } from "@shopify/restyle";

export function Loading(){
   const { colors } = useTheme<ThemeProps>();

   return (
      <Box flex={1} justifyContent="center" alignItems="center" bg="slate_900">
         <ActivityIndicator color={colors.white} />
      </Box>
   )
}