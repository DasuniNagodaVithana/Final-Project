import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, FlatList, Linking } from 'react-native';

const Bentota: React.FC = () => {

  const openWebPage = () => {
    const url = 'https://srilankatravelpages.com/bentota/';
    Linking.openURL(url);
  };
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator>
        <ImageBackground
          source={require("../../assets/images/Bentota.jpeg")}
          style={{ width: '100%', height: 250, justifyContent: 'flex-end' }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.searchContainer}></View>
        </ImageBackground>

        <Text style={styles.UserGreet}>Bentota</Text>

        <Text style={styles.paragraph}>
          Bentota is a coastal town in Sri Lanka, situated in the southern part of the country. It is renowned for its pristine beaches, 
          vibrant water sports, and beautiful landscapes. The Bentota River adds to the charm of the town, offering opportunities for boat 
          rides and witnessing the rich biodiversity of the area.

          Visitors to Bentota can enjoy a range of water activities, including jet-skiing, windsurfing, and boat tours. The town is also known
           for its lush greenery and serene environment, making it an ideal destination for relaxation and water-based adventures.

        </Text>
        <Text style={{ color: 'black', paddingLeft: 12, fontSize: 16 }}>For more information, visit{''}</Text>
        <Text style={styles.linkText} onPress={openWebPage}>
          https://srilankatravelpages.com/bentota/
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

export default Bentota;
