import { Box, Text, ThemeProps } from "@/theme";
import { Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"
import { useTheme } from "@shopify/restyle";

type HeaderProps = {
   title: string;
   cartQuantity?: number;
}

export function Header({title, cartQuantity = 0}: HeaderProps){
   const { colors } = useTheme<ThemeProps>();
   return (
      <Box flexDirection="row" alignItems="center" borderBottomColor="slate_700" borderBottomWidth={1} pb="5" mx="5">
         <Box flex={1}>
            <Image src={require("@/assets/logo.png")} width={24} height={128}/>

            <Text variant="heading" color="white" fontSize={20} mt="2">{title}</Text>
         </Box>

         {
            cartQuantity > 0 && (
               <TouchableOpacity style={{position:"relative"}} activeOpacity={0.7}>
                  <Box bg="lime_300" width={16} height={16} 
                     borderRadius="full" 
                     justifyContent="center" 
                     alignItems="center" 
                     top={8}
                     zIndex={10}
                     right={-14}
                  >
                     <Text variant="bold" fontSize={12} color="slate_900">{cartQuantity}</Text>
                  </Box>
      
                  < Feather name="shopping-bag" color={colors.white} size={24}/>
               </TouchableOpacity>
            )
         }
      </Box>
   )
}