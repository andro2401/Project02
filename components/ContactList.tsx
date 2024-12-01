import React from 'react';
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../styles/Global.tsx';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Micheal Corleone',
      status: 'Michael is the youngest son of Vito Corleone, a Sicilian immigrant who builds a Mafia empire. Upon his father\'s death, Michael succeeds him as the don of the Corleone crime family.',
      imageUrl: 'https://cdn.mos.cms.futurecdn.net/UG6dktWm4gaoJTxUwFdzLb.jpg',
      url: 'https://en.wikipedia.org/wiki/Michael_Corleone',
    },
    {
      uid: 2,
      name: 'Tony Soprano',
      status: 'The head of the Soprano family...',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCrNQ1JpS2LV0ENNlQ3OJT39XEOQHzXOgJw&s',
      url: 'https://en.wikipedia.org/wiki/Tony_Soprano',
    },
    {
      uid: 3,
      name: 'Al Capone',
      status: 'Sometimes known by the nickname "Scarface", was an American gangster and businessman who attained' +
        ' notoriety during the Prohibition era as the co-founder and boss of the Chicago Outfit from 1925 to 1931.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Al_Capone_in_1930.jpg/220px-Al_Capone_in_1930.jpg',
      url: 'https://en.wikipedia.org/wiki/Al_Capone',
    },
    {
      uid: 4,
      name: 'John Gotti',
      status: 'boss of the Gambino crime family in New York City. ',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/John_Gotti_FBI_booking_%28cropped%29_2.jpg/220px-John_Gotti_FBI_booking_%28cropped%29_2.jpg',
      url: 'https://en.wikipedia.org/wiki/John_Gotti',
    },
  ];

  function readMore(link:string){
    Linking.openURL(link);
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Contact List</Text>
      <View style={styles.listWrap}>
        {contacts.map((contact)=>
          <TouchableOpacity key={contact.uid}
                            style={styles.card}
                            onPress={() => readMore(contact.url)}
          >
            <Image style={styles.cardImg}
                   source={{
                     uri: contact.imageUrl,
                   }}
            />
            <View style={styles.textContent}>
              <Text style={styles.cardName}>{contact.name}</Text>
              {contact.status.length > 100 ?
                <Text style={styles.cardMessage}>{contact.status.slice(0, 80)}...</Text>
                :
                <Text style={styles.cardMessage}>{contact.status}</Text>
              }
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listWrap:{
    marginTop: 20,
  },
  card:{
    marginBottom: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    flex: 1,
  },
  cardImg:{
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  textContent:{
    flex: 1,
  },
  cardName:{
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 5,
  },
  cardMessage:{
    fontSize: 13,
    opacity: 0.5,
    lineHeight: 18,
  },
});
export default ContactList;
