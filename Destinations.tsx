import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, FlatList } from 'react-native';

interface DestinationsProps {
  navigation: any; // You might want to replace 'any' with the actual type of your navigation prop
}

const Destinations: React.FC<DestinationsProps> = ({ navigation }) => {
  const image = { uri: 'https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&w=1000&q=80' };
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
      
      <Text style={styles.UserGreet}>Anuradhapura</Text>

      <Text style={styles.paragraph}>
        Anuradhapura is one of the ancient capitals of Sri Lanka and holds great historical and cultural significance.
        It is located in the North Central Province of Sri Lanka and was established around the 4th century BCE.
        Anuradhapura served as the capital of the Sinhalese civilization for many centuries and is home to a plethora
        of ancient ruins, stupas, monasteries, and other archaeological wonders. The city is recognized as a UNESCO World Heritage Site,
        showcasing its rich cultural heritage.

      


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

export default Destinations;
