import React from 'react';
import {SafeAreaView} from 'react-native';
import BasicCards from './components/BasicCards.tsx';
import ScrollCards from './components/ScrollCards.tsx';

const App = () => {
  return (
    <SafeAreaView>
      <BasicCards />
      <ScrollCards />
    </SafeAreaView>
  );
};

export default App;
