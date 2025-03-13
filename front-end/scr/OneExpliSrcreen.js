import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const OnboardingChatScreen = ({ navigation }) => {
  const [step, setStep] = useState(1); // Controla o passo atual do onboarding

  const screens = [
    require('../assets/tela_mobilidade.png'), // Tela de Mobilidade
    require('../assets/tela_educ.png'), // Tela de Educação
    require('../assets/tela_saude.png'), // Tela de Saúde
  ];

  const handleNext = () => {
    if (step < screens.length) {
      setStep(step + 1); // Avança para o próximo passo
    } else {
      navigation.navigate('PersonScreen'); // Finaliza o onboarding e vai para o chat
    }
  };

  return (
    <View style={styles.container}>
      {/* Tela de onboarding */}
      <Image source={screens[step - 1]} style={styles.imagemInstrucao} />

      {/* Botão "Próximo" */}
      <TouchableOpacity style={styles.botao} onPress={handleNext}>
        <Text style={styles.textoBotao}>
          {step < screens.length ? 'Próximo' : 'Começar'}
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
    backgroundColor: '#FFF',
  },
  imagemInstrucao: {
    width: '100%',    // A imagem vai ocupar toda a largura da tela
    height: '90%',    // A imagem ocupará 80% da altura da tela
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
