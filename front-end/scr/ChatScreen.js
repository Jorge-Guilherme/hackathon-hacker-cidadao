import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const ChatScreen = ({ route, navigation }) => {
  const personagem = route.params?.personagem || { imagem: require('../assets/icon.png') };
  const [mensagem, setMensagem] = useState('');
  const [chat, setChat] = useState([]);
  const flatListRef = useRef(null);

  // Função para rolar automaticamente para a última mensagem
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [chat]);

  const enviarMensagem = async () => {
    if (mensagem.trim() === '') {
      Alert.alert('Erro', 'A mensagem não pode estar vazia.');
      return;
    }

    // Adiciona a mensagem do usuário ao chat
    const novaMensagemUsuario = { id: chat.length + 1, texto: mensagem, usuario: true };
    setChat([...chat, novaMensagemUsuario]);
    setMensagem('');

    try {
      // Envia a mensagem para o backend
      const resposta = await axios.post('http://172.22.74.245:8000/enviar-mensagem', {
        texto: mensagem,
      });

      // Adiciona a resposta do backend ao chat
      const novaMensagemPersonagem = {
        id: chat.length + 2,
        texto: resposta.data.resposta,
        usuario: false,
      };
      setChat((prevChat) => [...prevChat, novaMensagemPersonagem]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      Alert.alert('Erro', 'Não foi possível enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/favicon.png')} style={styles.logo} />
        <Text style={styles.tituloHeader}>DigAI</Text>
        
        {/* Ícone de ajuda */}
        <TouchableOpacity
          style={styles.botaoAjuda}
          onPress={() => navigation.navigate('OneExpli')}
        >
          <Ionicons name="help-circle" size={32} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Chat */}
      <View style={styles.chatContainer}>
        <FlatList
          ref={flatListRef}
          data={chat}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={item.usuario ? styles.mensagemUsuario : styles.mensagemPersonagem}>
              {!item.usuario && (
                <Image source={personagem.imagem} style={styles.personagem} />
              )}
              <View style={item.usuario ? styles.balaoUsuario : styles.balaoPersonagem}>
                <Text style={styles.textoMensagem}>{item.texto}</Text>
              </View>
            </View>
          )}
        />
      </View>

      {/* Campo de entrada de mensagem */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={mensagem}
          onChangeText={setMensagem}
          placeholder="Digite sua mensagem..."
        />
        <Button title="Enviar" onPress={enviarMensagem} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#007BFF',
    marginTop: 50,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  tituloHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  botaoAjuda: {
    marginLeft: 'auto',
  },
  chatContainer: {
    flex: 1,
    marginTop: '20%',
    paddingHorizontal: 10,
  },
  mensagemUsuario: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  mensagemPersonagem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  personagem: {
    width: 40,
    height: 50,
    marginRight: 10,
  },
  balaoUsuario: {
    backgroundColor: '#DCF8C6',
    padding: 10,
    borderRadius: 10,
    maxWidth: '70%',
  },
  balaoPersonagem: {
    backgroundColor: '#ECECEC',
    padding: 10,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    maxWidth: '70%',
  },
  textoMensagem: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#CCC',
    backgroundColor: '#FFF',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default ChatScreen;