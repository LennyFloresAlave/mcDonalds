import { View, Text, TouchableOpacity, Image } from "react-native";
import estilo from "./style";
export default function Header() {
  return (
    <>
      <View
        style={{
          width: 1900,
          height:50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor:'#8B0000',
          padding: 40,
          shadowColor: 'yellow',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
        }}
      >
        <TouchableOpacity >
        <Image
        style={estilo.logo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/732/732217.png',
        }}
      />
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={estilo.tituloCard}>Lanches</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={estilo.tituloCard}>Sobremesas</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={estilo.tituloCard}>Serviços</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={estilo.tituloCard}>Login</Text>
          </TouchableOpacity>
      </View>
    </>
  );
}