import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { 
  Primeiro, Padrao, 
  Component1, Component2,
  Estilos, MinMax, Titulo, Calculator 
} from './src/components'
// import Calculadora from './src/components';

const App = () => { 

  return (
    <SafeAreaView>
      {/* <Titulo principal="Cosméticos" secundario="Rosto"/>
      <MinMax min="2" max="10"/>
      <MinMax min="5" max="15" label="texto qualquer"/>
      <MinMax min={60} max={80} label="com numbers"/>
      <Estilos/>
      <Primeiro />
      <Padrao />
      <Component1 />
      <Component2 /> */}

      <Calculator />
    </SafeAreaView>
  );
};

export default App;