import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../styles/Global.tsx';

const BasicCards = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Basic Cards</Text>
      <View style={styles.basicCardWrapper}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>Green</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  basicCardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    flexWrap: 'wrap',
  },
  card:{
    flex: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  cardText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardOne:{
    backgroundColor: '#BF3100',
  },
  cardTwo:{
    backgroundColor: '#044389',
  },
  cardThree:{
    backgroundColor: '#8EA604',
  },
});
export default BasicCards;
