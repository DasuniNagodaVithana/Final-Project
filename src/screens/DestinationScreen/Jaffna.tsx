import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, FlatList, Linking } from 'react-native';

const Jaffna: React.FC = () => {

  const openWebPage = () => {
    const url = 'https://srilankatravelpages.com/jaffna/';
    Linking.openURL(url);
  };
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator>
        <ImageBackground
          source={require("../../assets/images/Jaffna.jpeg")}
          style={{ width: '100%', height: 250, justifyContent: 'flex-end' }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.searchContainer}></View>
        </ImageBackground>

        <Text style={styles.UserGreet}>Jaffna</Text>

        <Text style={styles.paragraph}>
        Jaffna is a vibrant city located in the northern part of Sri Lanka, known for its rich cultural heritage and unique traditions.
          The city has a historical significance influenced by various civilizations, and its landmarks include the Jaffna Fort, Nagadeepa
          Buddhist Temple, and Nallur Kandaswamy Temple.

          Jaffna is famous for its authentic Jaffna cuisine, characterized by delicious seafood and traditional Tamil dishes. The Jaffna
          Peninsula offers beautiful beaches, and the surrounding islands provide a serene escape. Explore the unique cultural blend and
          historical sites that make Jaffna a distinctive destination.

        </Text>
        <Text style={{ color: 'black', paddingLeft: 12, fontSize: 16 }}>For more information, visit{''}</Text>
        <Text style={styles.linkText} onPress={openWebPage}>
        'https://srilankatravelpages.com/jaffna/'
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  UserGreet: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#359CBB',
    marginLeft: 12
  },
  searchContainer: {
    paddingTop: 70,
    paddingLeft: 16
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000',
    padding: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginLeft: 12,
    fontSize: 16,
  },
});

export default Jaffna;
