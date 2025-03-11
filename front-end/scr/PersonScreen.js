// src/screens/EscolhaPersonagemScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const EscolhaPersonagemScreen = ({ navigation }) => {
  const [personagemEscolhido, setPersonagemEscolhido] = useState(null);

  const personagens = [
    { id: 1, nome: 'Mobilidade', imagem: require('../assets/pedreiro.png') },
    { id: 2, nome: 'Educação', imagem: require('../assets/maloqueiro-feliz.png') },
    { id: 3, nome: 'Saúde', imagem: require('../assets/favicon.png') },
  ];

  const handleEscolha = (personagem) => {
    setPersonagemEscolhido(personagem);
    navigation.navigate('Chat', { personagem }); // Navega para o chat com o personagem escolhido
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Qual vai ser o assunto da nossa prosa hoje?</Text>
      {personagens.map((personagem) => (
        <TouchableOpacity
          key={personagem.id}
          style={styles.botaoPersonagem}
          onPress={() => handleEscolha(personagem)}
        >
          <Image source={personagem.imagem} style={styles.imagemPersonagem} />
          <Text style={styles.textoPersonagem}>{personagem.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botaoPersonagem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagemPersonagem: {
    width: 80,
    height: 100,
    marginBottom: 10,
  },
  textoPersonagem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EscolhaPersonagemScreen;