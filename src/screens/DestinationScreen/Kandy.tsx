import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, FlatList, Linking } from 'react-native';

const Kandy: React.FC = () => {

  const openWebPage = () => {
    const url = 'https://srilankatravelpages.com/kandy/';
    Linking.openURL(url);
  };
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator>
        <ImageBackground
          source={require("../../assets/images/Kandy.jpeg")}
          style={{ width: '100%', height: 250, justifyContent: 'flex-end' }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.searchContainer}></View>
        </ImageBackground>

        <Text style={styles.UserGreet}>Kandy</Text>

        <Text style={styles.paragraph}>
        Kandy is a historic city in the heart of Sri Lanka, renowned for its cultural heritage and scenic surroundings.
          The city is home to the sacred Temple of the Tooth Relic, which is a significant pilgrimage site for Buddhists.
          Kandy's lush landscapes, including the picturesque Kandy Lake and the Peradeniya Botanical Gardens, add to its charm.

          Visitors to Kandy can explore the rich history and architecture of the city, attend traditional Kandyan dance performances,
          and enjoy a tranquil boat ride on the Kandy Lake. The vibrant culture and spiritual significance make Kandy a captivating destination.

        </Text>
        <Text style={{ color: 'black', paddingLeft: 12, fontSize: 16 }}>For more information, visit{''}</Text>
        <Text style={styles.linkText} onPress={openWebPage}>
        https://srilankatravelpages.com/kandy/
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

export default Kandy;
