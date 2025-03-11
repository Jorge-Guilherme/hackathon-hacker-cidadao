// src/screens/OnboardingScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Personagem e balão de conversa */}
      <View style={styles.content}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.textlogo}>DigAI</Text>
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
    padding: 2,
    justifyContent: 'space-between',
    backgroundColor: '#ffffe0',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  logo: {
    width: 200,
    height: 250,
    marginTop: 250,
  },
  balao: {
    backgroundColor: '#0000',
    padding: 5,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    
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
  textlogo: {
    fontSize: 40,
  }
});

export default OnboardingScreen;