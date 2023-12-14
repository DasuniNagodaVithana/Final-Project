import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, Linking } from 'react-native';

const Ella: React.FC = () => {
  
  const openWebPage = () => {
    const url = 'https://srilankatravelpages.com/ella-sri-lanka/';
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator>
        <ImageBackground
          source={require("../../assets/images/Ella.jpeg")}
          style={{ width: '100%', height: 250, justifyContent: 'flex-end' }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.searchContainer}></View>
        </ImageBackground>

        <Text style={styles.UserGreet}>Ella</Text>

        <Text style={styles.paragraph}>
          Ella is a charming town nestled in the central highlands of Sri Lanka, surrounded by lush greenery and scenic landscapes.
          Known for its cool climate and breathtaking views, Ella has become a popular destination for nature lovers and adventure seekers.

          The iconic Ella Rock and the Nine Arch Bridge are among the must-visit attractions in the area. Visitors can enjoy hikes to
          Ella Rock, explore tea plantations, and witness the stunning sunrise from Little Adam's Peak. The laid-back atmosphere and
          natural beauty make Ella a perfect retreat in the Sri Lankan hill country.
        </Text>
        <Text style={{ color: 'black', paddingLeft: 12, fontSize: 16 }}>For more information, visit{''}</Text>
        <Text style={styles.linkText} onPress={openWebPage}>
          https://srilankatravelpages.com/ella/
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

export default Ella;
