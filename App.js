import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import Header from "./Components/Header";
import Card from "./Components/Card";
import ROTINAS from "./data";
import { ScrollView } from "react-native-web";
import sobremesas from "./sobremesas";
import bebidas from "./bebidas";
import Footer from "./Components/Footer";



export default function App() {
  return (
    <ScrollView style={estilo.container} >
      <Header></Header>
      <Image
        style={estilo.logo}
        source={{
          uri: 'https://payload.cargocollective.com/1/3/114440/7711205/ad_3_web_905_2x.jpg',
        }}
      />
      <Text style={{color:"#B22222",fontWeight: "bold",marginLeft: 800,fontSize: 35, marginTop: 30,marginBottom: 30}}>Sanduiches</Text>
      <FlatList style={{width:'100%'}}
        data={ROTINAS}
        horizontal = {true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            preco={item.preco}
            titulo={item.titulo}
            imagem={item.imagem}
            descricao={item.descricao}
            valorCalorico={item.valorCalorico}
            categoria={item.categoria}
          />
        )}
      />

<Text style={{color:"#B22222",fontWeight: "bold",marginLeft: 800,fontSize: 35, marginTop: 30,marginBottom: 30}}>Sobremesas</Text>
      <FlatList style={{width:'100%'}}
        data={sobremesas}
        horizontal = {true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
             preco={item.preco}
            titulo={item.titulo}
            imagem={item.imagem}
            descricao={item.descricao}
            valorCalorico={item.valorCalorico}
            categoria={item.categoria}
          />
        )}
      />
       <Text style={{color:"#B22222",fontWeight: "bold",marginLeft: 800,fontSize: 35, marginTop: 30,marginBottom: 30}}>Bebidas</Text>
      <FlatList style={{width:'100%'}}
        data={bebidas}
        horizontal = {true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
             preco={item.preco}
            titulo={item.titulo}
            imagem={item.imagem}
            descricao={item.descricao}
            valorCalorico={item.valorCalorico}
            categoria={item.categoria}
          />
        )}
      />
      <Text style={estilo.subtitulo}> hiii</Text>
      <Footer></Footer>
    </ScrollView>
    
  );
}
const estilo = StyleSheet.create({
  container: {
   //flex:1,    

    //alignItems: "center",

    backgroundColor: "white",

   

    //paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 35,
    alignItems: "center",
    fontWeight: "bold",
   marginLeft: 800,
    marginTop: 30,
    marginBottom: 30,
    color:"	#FF8C00"
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
   color:"white",
    marginTop: 40,
  },
  logo: {
    width: 1500, // Ajuste conforme necessário
    height: 700, // Ajuste conforme necessário
    //resizeMode: 'contain',
    marginLeft: 170,
    marginTop:50,
    
  }
});