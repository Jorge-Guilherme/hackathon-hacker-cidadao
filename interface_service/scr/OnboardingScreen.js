// src/screens/OnboardingScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Personalizado */}
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>DigAI</Text>
        <Image source={require('../assets/favicon.png')} style = {styles.logo}/>

      </View>

      {/* Personagem e balão de conversa */}
      <View style={styles.content}>
        <Image source={require('../assets/favicon.png')} style={styles.personagem} />
        <View style={styles.balao}>
          <Text style={styles.textoBalao}>
            Seja bem-vindo ao DigAI, uma plataforma de chat com o objetivo de tornar dados em informação com a ajuda de IA, vamos embarcar em uma conversa daora?
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
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 50,
    backgroundColor: '#007BFF', // Cor de fundo do header
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    
  },
  tituloHeader: {
    color: '#FFF', // Cor do texto do header
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo:{
    marginLeft: 250,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personagem: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  balao: {
    flex: 1,
    backgroundColor: '#ECECEC',
    padding: 15,
    borderRadius: 10,
    borderTopLeftRadius: 0,
  },
  textoBalao: {
    fontSize: 16,
    color: '#333',
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
});

export default OnboardingScreen;