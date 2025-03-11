import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const OnboardingChatScreen = ({ navigation }) => {
  const [step, setStep] = useState(1); // Controla o passo atual do onboarding

  const messages = [
    {
      text: 'Para enviar uma mensagem, digite no campo de texto e toque em "Enviar".',
      image: require('../assets/icon.png'), // Imagem ilustrativa
    },
    {
      text: 'Se precisar de ajuda, digite "Ajuda" ou toque no ícone de suporte.',
      image: require('../assets/splash-icon.png'), // Imagem ilustrativa
    },
    {
      text: 'Pronto! Agora você já sabe como usar o chat. Vamos começar?',
      image: require('../assets/favicon.png'), // Imagem ilustrativa
    },
  ];

  const handleNext = () => {
    if (step < messages.length) {
      setStep(step + 1); // Avança para o próximo passo
    } else {
      navigation.navigate('PersonScreen'); // Finaliza o onboarding e vai para o chat
    }
  };

  return (
    <View style={styles.container}>
      {/* Personagem */}
      <Image source={require('../assets/favicon.png')} style={styles.personagem} />

      {/* Balão de Conversa */}
      <View style={styles.balao}>
        <Text style={styles.textoBalao}>{messages[step - 1].text}</Text>
        <Image source={messages[step - 1].image} style={styles.imagemInstrucao} />
      </View>

      {/* Botão "Próximo" */}
      <TouchableOpacity style={styles.botao} onPress={handleNext}>
        <Text style={styles.textoBotao}>
          {step < messages.length ? 'Próximo' : 'Começar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  personagem: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  balao: {
    backgroundColor: '#ECECEC',
    padding: 15,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    alignItems: 'center',
  },
  textoBalao: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  imagemInstrucao: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  botao: {
    marginTop: 20,
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

export default OnboardingChatScreen;