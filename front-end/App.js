// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './scr/OnboardingScreen'; // Tela de onboarding inicial
import PersonScreen from './scr/PersonScreen'; // Tela de escolha do personagem
import ChatScreen from './scr/ChatScreen'; // Tela de chat
import OneExpliScreen from './scr/OneExpliSrcreen'; // Tela de explicação (se necessário)

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        {/* Tela de Onboarding */}
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }} // Esconde o cabeçalho
        />

        {/* Tela de Escolha do Personagem */}
        <Stack.Screen
          name="PersonScreen"
          component={PersonScreen}
          options={{ headerShown: false }} // Esconde o cabeçalho
        />

        {/* Tela de Chat */}
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false }} // Esconde o cabeçalho
        />

        {/* Tela de Explicação (OneExpliScreen) */}
        <Stack.Screen
          name="OneExpli"
          component={OneExpliScreen}
          options={{ headerShown: false }} // Esconde o cabeçalho
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;