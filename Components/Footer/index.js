import { View, Text } from "react-native";
import estilo from "./style";
export default function Header() {
  return (
    <>
      <View
        style={{
          width: 1900,
          height:60,
         // flexDirection: "row",
          //alignItems: "center",
          justifyContent: "space-between",
          backgroundColor:'#8B0000',
          padding: 40,
          
        }}
      >
        
            <Text style={estilo.tituloCard}>Email: grupoalev345@gmail.com</Text>
            <Text style={estilo.tituloCard}>Telefone: 11 94569-4512</Text>
           

      </View>
    </>
  );
}