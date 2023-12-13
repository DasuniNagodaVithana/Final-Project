import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, FlatList } from 'react-native';

interface SigiriyaProps {
  navigation: any; // You might want to replace 'any' with the actual type of your navigation prop
}

const Sigiriya: React.FC<SigiriyaProps> = ({ navigation }) => {
  const image = { uri: 'https://i.pinimg.com/originals/f4/f9/d7/f4f9d7a8a33c990443c9abf4a4132c18.jpg' };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator>
      <ImageBackground
        source={image}
        style={{ width: '100%', height: 350, justifyContent: 'flex-end' }}
        imageStyle={{ borderBottomRightRadius: 65 , }}
      >
        
        <View style={styles.searchContainer}>
          
         </View> 
      </ImageBackground>
      
      <Text style={styles.UserGreet}>Sigiriya</Text>

      <Text style={styles.paragraph}>
      
      Sigiriya, also known as the Lion Rock, is a UNESCO World Heritage Site located in the central part of Sri Lanka. 
      It is an ancient rock fortress and archaeological marvel that stands majestically atop a massive rock plateau. 
      Built during the 5th century by King Kashyapa I, Sigiriya served as a palace complex and later as a Buddhist 
      monastery.

The rock fortress is renowned for its impressive frescoes, particularly the famous "Heavenly Maidens" or 
"Sigiriya maidens," which are vividly painted on the rock's western face. Visitors can climb a series of steep 
staircases and pathways to reach the summit, where they are greeted by the ruins of the ancient palace complex.
 At the entrance, there are the remnants of a pair of colossal lion's paws, giving rise to its alternate name, Lion Rock.

The site offers breathtaking panoramic views of the surrounding landscape, including lush greenery, gardens, and ancient 
reservoirs. Sigiriya stands as a testament to the advanced engineering and architectural skills of its time and remains 
one of Sri Lanka's most iconic and visited historical sites.

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

  text1:{
    
  },
  UserGreet:{
    fontSize:38,
    fontWeight:'bold',
    color:'#000'
  },
  UserText:{
    fontSize:16,
    fontWeight:'normal',
    color:'#fff5ee'
  },
  searchContainer:{
    paddingTop:70,
    paddingLeft:16
  },

  paragraph: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000',
    padding: 16,
    lineHeight: 24,
    textAlign:'justify' ,
    
  },


});

export default Sigiriya;
