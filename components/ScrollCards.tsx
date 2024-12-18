import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../styles/Global.tsx';

const ScrollCards = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Scrollable Cards</Text>
      <ScrollView
        style={styles.scrollWrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >

        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>Green</Text>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollWrapper:{
    marginTop: 10,
  },
  card:{
    width: 120,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    marginRight: 10,
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
export default ScrollCards;
