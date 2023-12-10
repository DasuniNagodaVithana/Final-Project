import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, FlatList } from 'react-native';

interface GalleProps {
  navigation: any; // You might want to replace 'any' with the actual type of your navigation prop
}

const Galle: React.FC<GalleProps> = ({ navigation }) => {
  const image = { uri: 'https://images.unsplash.com/photo-1568843240915-b512cc9b4415?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FsbGV8ZW58MHx8MHx8fDA%3D' };
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
      
      <Text style={styles.UserGreet}>Galle</Text>

      <Text style={styles.paragraph}>
      Galle is a city located on the southwestern tip of Sri Lanka, positioned along the country's picturesque coastline.
       It is renowned for its historical significance, characterized by well-preserved Dutch-colonial architecture that 
       reflects its colonial past. 
      The city is home to the Galle Fort, a UNESCO World Heritage Site, which stands as a testament to the European 
      influence in the region.

Galle Fort, built by the Dutch in the 17th century, encompasses a charming mix of narrow streets, colonial 
buildings, and a distinct atmosphere that transports visitors to a bygone era. The fortification offers 
stunning views of the Indian Ocean and has become a hub for art galleries, boutique shops, cafes, and cultural events.

Apart from its historical allure, Galle boasts beautiful beaches, vibrant markets, and a lively 
atmosphere that attracts both local and international tourists. The city's unique blend of history, culture,
 and coastal beauty makes it a captivating destination for those exploring the rich tapestry of Sri Lanka.

      


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

export default Galle;
