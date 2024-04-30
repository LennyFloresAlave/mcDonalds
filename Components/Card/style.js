import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  cardTarefa: {
    //marginTop: 20,
    display:'flex',
    
    backgroundColor: "#A8DADC",

    width: 250,

    height: 350,

    alignItems: "center",

    justifyContent: 'space-between',

    borderRadius: 10,

    borderColor: "white",

    //borderWidth: 2,
    
    //flexDirection: "row",

    padding: 15,

    shadowColor: "#000",

    shadowOffset: { width: 0, height: 2 },

    shadowOpacity: 0.3,

    shadowRadius: 2,

    //elevation: 5,
    margin:30
  },
  card: {
    backgroundColor: '#F0E68C',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: '#FF8C00',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
   //elevation: 5,
   marginLeft: 90,
   alignItems:'center',
   flex:1,
   width:200
   
  },
  textoCard: {
    fontSize: 10,
color: "#FF7F50",
    marginTop: 5,
  },

  imagemCard: {
    width: 150,

    height: 150,

    marginRight: 15,
  },

  tituloCard: {
    fontSize: 15,

    fontWeight: "bold",

    color: "#FF4500",
  },
  
});

export default estilo;