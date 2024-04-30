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
  },
  login:{
    backgroundColor:'yellow',
    color:'black',
    width:100,
    height:30,
    borderRadius:5,
    fontSize:18
  }
});

export default estilo;