import React from 'react';
import {SafeAreaView} from 'react-native';
import BasicCards from './components/BasicCards.tsx';
import ScrollCards from './components/ScrollCards.tsx';
import ImageCard from './components/ImageCard.tsx';

const App = () => {
  return (
    <SafeAreaView>
      <BasicCards />
      <ScrollCards />
      <ImageCard />
    </SafeAreaView>
  );
};

export default App;
