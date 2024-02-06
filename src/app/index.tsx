import { Header } from "@/components/header";
import { Box } from "../theme";

export default function Home(){
   return (
      <Box flex={1} pt="8">
         <Header title="Cardápio" />
      </Box>
   )
}