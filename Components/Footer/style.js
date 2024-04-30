import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  titulo: {
    fontSize: 35,

    fontWeight: "bold",

    marginTop: 20,
  },

  subtitulo: {
    fontSize: 20,

    fontWeight: "bold",

    marginTop: 15,
  },

  tituloCard: {
    fontSize: 15,

    fontWeight: "bold",

    color: "white",
  },
  logo: {
    width: 40, // Ajuste conforme necessário
    height: 40, // Ajuste conforme necessário
    //resizeMode: 'contain',
  }
});

export default estilo;