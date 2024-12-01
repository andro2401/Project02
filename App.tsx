import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import BasicCards from './components/BasicCards.tsx';
import ScrollCards from './components/ScrollCards.tsx';
import ImageCard from './components/ImageCard.tsx';
import ActionCard from './components/ActionCard.tsx';
import ContactList from './components/ContactList.tsx';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ContactList />
        <BasicCards />
        <ActionCard />
        <ScrollCards />
        <ImageCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
