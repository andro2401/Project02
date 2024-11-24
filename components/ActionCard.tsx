import React from 'react';
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../styles/Global.tsx';

const ActionCard = () => {
  function openWebsite(websiteLink:string){
    Linking.openURL(websiteLink);
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Action Card</Text>
      <View style={styles.card}>
        <Text style={styles.cardHead}>FNC</Text>
        <Image
          style={styles.img}
          source={{
            uri: 'https://content.eventim.com/static/uploaded/at/c/y/4/l/cy4l_960_360.png',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Fnc 20</Text>
          <Text style={styles.cardSubtitle}>Arena Zagreb</Text>
          <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, fugiat, nisi? Cumque eius, eligendi est ipsam nihil porro quasi veritatis.</Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.fnc.tv')}
            style={[styles.btn, styles.btnSecondary]}
          >
            <Text style={styles.btnText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.fnc.tv/en/cart/buy/fnc-20/')}
            style={[styles.btn, styles.btnPrimary]}
          >
            <Text style={styles.btnText}>Watch Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 2,
    backgroundColor: '#f9f9f9',
  },
  cardHead:{
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    height: 200,
  },
  cardBody: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginTop: 5,
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: 600,
    marginTop: 5,
  },
  cardDescription: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 5,
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
    paddingBottom: 15,
    gap: 20,
  },
  btn:{
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 6,
  },
  btnPrimary:{
    backgroundColor: '#EC4E20',
  },
  btnSecondary:{
    backgroundColor: '#353531',
  },
  btnText:{
    fontSize: 14,
    fontWeight: 700,
    color: '#fff',
  },
});
export default ActionCard;
