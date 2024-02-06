import { Loading } from "@/components/loading";
import { Box, Text } from "../theme";

import {
   useFonts,
   Inter_400Regular,
   Inter_500Medium,
   Inter_600SemiBold,
   Inter_700Bold
} from "@expo-google-fonts/inter"

export default function Layout(){
   const [fontsLoaded] = useFonts({
      Inter_400Regular,
      Inter_500Medium,
      Inter_600SemiBold,
      Inter_700Bold
   })
   
   if(!fontsLoaded){
      return <Loading />
   }

   return (
      <Box>
         <Text>Layout</Text>
      </Box>
   )
}