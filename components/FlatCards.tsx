import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {globalStyles} from '../styles/Global.tsx';

const FlatCards = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Flat Cards</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({

});
export default FlatCards;
