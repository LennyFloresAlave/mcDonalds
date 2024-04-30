import { Text, View, Image } from "react-native";

import estilo from "./style";

export default function Card({ preco, titulo, imagem, descricao, valorCalorico, categoria }) {
  return (
    <View style={estilo.card}>
      <Image style={estilo.imagemCard} source={{ uri: imagem }} />

      <View style={{ marginLeft: 15, width: 150 }}>
        <Text style={estilo.tituloCard}>{titulo}</Text>

        <Text style={estilo.textoCard}>{descricao}</Text>
        <Text style={estilo.textoCard}>{valorCalorico}</Text>
        <Text style={estilo.textoCard}>{categoria}</Text>
      </View>

      <Text style={{ fontSize: 20,marginTop:20 }}>{preco}</Text>
    </View>
  );
}