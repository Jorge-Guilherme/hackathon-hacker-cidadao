// src/screens/OnboardingScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Personagem e balão de conversa */}
      <View style={styles.content}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.textlogo}>Seja bem-vindo</Text>
        <View style={styles.balao}>
          <Text style={styles.textoBalao}>
            Uma plataforma de chat com o objetivo de tornar dados em informações acessiveis com a ajuda de IA.
          </Text>
        </View>
      </View>

      {/* Botão "Próximo" no footer */}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('OneExpli')}>
        <Text style={styles.textoBotao}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: '#00d9ff',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 390,
    height: 185,
    marginTop: 230, // Ajuste a margem superior para centralizar a logo verticalmente
    marginLeft: 'auto',  // Isso empurra a logo para a direita, afastando da borda esquerda
    marginRight: 'auto', // Isso ajuda a centralizar a logo horizontalmente
  },
  
  balao: {
    backgroundColor: '#0000',
    padding: 5,
    borderRadius: 10,
    borderTopLeftRadius: 10,
  },
  textoBalao: {
    fontSize: 16,
    color: '#333', // Cor preta para o texto
  },
  botao: {
    alignSelf: 'flex-end',
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textlogo: {
    fontSize: 40,
    fontFamily: 'Montserrat-Bold', // Fonte em negrito
    color: '#FFF', // Cor branca
    fontWeight: 'bold', // Negrito
    marginBottom: 20,
  },
});


export default OnboardingScreen;