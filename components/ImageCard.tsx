import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../styles/Global.tsx';

const ImageCard = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Image Card</Text>
      <View style={styles.card}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://images.pexels.com/photos/29509778/pexels-photo-29509778/free-photo-of-serene-beach-sunset-with-lone-walker.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
          />
        <Text style={styles.cardTitle}>Card Title</Text>
        <Text style={styles.cardSubtitle}>Card Subtitle</Text>
        <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, fugiat, nisi? Cumque eius, eligendi est ipsam nihil porro quasi veritatis.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  img: {
    height: 200,
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
  cardFooter: {},
});
export default ImageCard;
