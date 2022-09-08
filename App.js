import React from 'react';
import { SafeAreaView, Text } from 'react-native';
// import { Primeiro, Padrao, Component1, Component2, Estilos } from './src/components';
import Primeiro from './src/components/Primeiro';
import Padrao from './src/components/Multi';

const App = () => {
  return (
    <SafeAreaView>
      <Padrao />
      <Primeiro />
      <Text>Teste</Text>
    </SafeAreaView>
  );
};

export default App;
