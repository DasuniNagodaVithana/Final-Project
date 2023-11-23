import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

const Home: React.FC = () => {
  const image = { uri: 'https://images.pexels.com/photos/16508230/pexels-photo-16508230.jpeg?cs=srgb&dl=pexels-malinda-bandara-16508230.jpg&fm=jpg' };

  const handleCardPress = (destination: string) => {
    // Handle the press for each card (you can navigate, show details, etc.)
    console.log(`Card pressed: ${destination}`);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={{ width: '100%', height: 270, justifyContent: 'flex-end' }}
        imageStyle={{ borderBottomRightRadius: 65 }}
      >
        <View style={styles.DarkOverlay}></View>
        <View style={styles.searchContainer}>
          <Text style={styles.UserGreet}>Hello Travellers,</Text>
          <Text style={styles.UserText}>Where would you like to go today?</Text>
        </View>
      </ImageBackground>

      <View style={styles.destinationContainer}>
        <Text style={styles.destinationText}>Destinations</Text>
      </View>

      <ScrollView horizontal>
        <View style={styles.cardsContainer}>
          {/* Card 1 */}
          <TouchableOpacity onPress={() => handleCardPress('Anuradhapura')}>
            <View style={styles.card}>
              <Image
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&w=1000&q=80',
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>Anuradhapura</Text>
            </View>
          </TouchableOpacity>
         

          {/* Card 2*/}
          <View style={styles.card}>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1568843240915-b512cc9b4415?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FsbGV8ZW58MHx8MHx8fDA%3D',
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Galle</Text>
            
          </View>

            {/* Card 3*/}
            <View style={styles.card}>
            <Image
              source={{
                uri:
                  'https://i.pinimg.com/originals/f4/f9/d7/f4f9d7a8a33c990443c9abf4a4132c18.jpg',
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Sigiriya</Text>
            
          </View>

          {/* Card 4*/}
          <View style={styles.card}>
            <Image
              source={{
                uri:
                  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/43/a0/61/nallur-kovil-jaffnamost.jpg?w=500&h=400&s=1',
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Jaffna</Text>
            
          </View>

          {/* Card 5*/}
          <View style={styles.card}>
            <Image
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2020/01/23/22/51/ella-4788958_640.jpg',
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Ella</Text>
            
          </View>

          {/* Card 6*/}
          <View style={styles.card}>
            <Image
              source={{
                uri:
                  'https://w0.peakpx.com/wallpaper/318/673/HD-wallpaper-kandy-daladamaligawa-iphone-mobile-nature-nature-graphy-sri-lanka-temple-thumbnail.jpg',
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Kandy</Text>
            
          </View>

        </View>
      </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  destinationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 30,
  },
  destinationText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
    color: 'black',
  },
  cardsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  card: {
    width: 200,
    height: 310,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 20,
  },
  cardImage: {
    width: 190,
    height: 280,
    borderRadius: 10,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  cardText2: {
    fontSize: 10,
    fontWeight: '400',
    color: 'gray',
  },

  DarkOverlay:{
    position:'absolute',
    top:0,
    right:0,
    left:0,
    height:240,
    backgroundColor:'#000',
    opacity:0.3,
    borderBottomRightRadius:65

  },
  searchContainer:{
    paddingTop:70,
    paddingLeft:16
  },
  UserGreet:{
    fontSize:38,
    fontWeight:'bold',
    color:'#fff5ee'
  },
  UserText:{
    fontSize:16,
    fontWeight:'normal',
    color:'#fff5ee'
  },


  
});

export default Home;
