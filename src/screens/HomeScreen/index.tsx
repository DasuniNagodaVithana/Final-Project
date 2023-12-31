import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Location {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}


const Index = () => {
  const navigation = useNavigation();
  
  const [gallery, setGallery] = useState([
    { key: "1", source: require("../../assets/images/Anuradhapura.jpeg"), title: "Anuradhapura" },
    { key: "2", source: require("../../assets/images/Galle.jpeg"), title: "Galle" },
    { key: "3", source: require("../../assets/images/Bentota.jpeg"), title: "Bentota" },
    { key: "4", source: require("../../assets/images/Ella.jpeg"), title: "Ella" },
    { key: "5", source: require("../../assets/images/Kandy.jpeg"), title: "Kandy" },
    { key: "6", source: require("../../assets/images/Jaffna.jpeg"), title: "Jaffna" },
  ]);

  const [populargallery, setPopuarGallery] = useState([
    { key: "1", source: require("../../assets/images/gallefort.jpeg"), title: "Galle Fort" },
    { key: "2", source: require("../../assets/images/sigiriya-459197.jpg"), title: "Seegiriya" },
    { key: "3", source: require("../../assets/images/tree.jpeg"), title: "Coconut Tree hill" },
    { key: "4", source: require("../../assets/images/Ella.jpeg"), title: "Nine arch bridge" },
    { key: "5", source: require("../../assets/images/Kandy.jpeg"), title: "Temple of Tooth" },
    { key: "6", source: require("../../assets/images/nallur.jpg"), title: "Nallur Kandaswamy temple" },
  ]);

  const handleImagePress = (title: string) => {
    // Navigate to a screen based on the title
    navigation.navigate(`${title}Screen`);
  };
  const handlePopularImagePress = (title: string) => {
    let selectedLocation: Location | null = null;
  
    // Manually specify coordinates for the selected location
    switch (title) {
      case 'Galle Fort':
        selectedLocation = {
          latitude: 6.053519,
          longitude: 80.220978,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        };
        break;
  
      case 'Sigiriya':
        selectedLocation = {
          latitude: 7.9575,
          longitude: 80.7608,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        };
        break;
  
      case 'Coconut Tree Hill':
        selectedLocation = {
          latitude: 5.9667,
          longitude: 80.4167,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        };
        break;
  
      case 'Nine Arch Bridge':
        selectedLocation = {
          latitude: 6.8515,
          longitude: 81.0007,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        };
        break;
  
      case 'Temple of Tooth':
        selectedLocation = {
          latitude: 7.2947,
          longitude: 80.6394,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        };
        break;
  
      case 'Nallur Kandaswamy Temple':
        selectedLocation = {
          latitude: 9.6844,
          longitude: 80.0230,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        };
        break;
  
      default:
        // Handle default case or do nothing
        break;
    }
  
    // Navigate to the MapScreen with the selectedLocation parameter
    navigation.navigate('Map', { selectedLocation });
  };
  
  

  return (
    <View style={{ backgroundColor: '#BFE4EC', flexGrow: 1, height: "100%" }}>
      <View>
        <ImageBackground
          source={require("../../assets/images/sl.jpg")}
          style={{ width: '100%', height: 220 }}
          imageStyle={{ borderBottomRightRadius: 65 }}>
          <View style={styles.DarkOverlay}></View>
          <View style={styles.searchContainer}>
            <Text style={styles.UserGreet}>Hello Travellers,</Text>
            <Text style={styles.UserText}>Where would you like to go today?</Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder='Search Destinations'
              placeholderTextColor='#d3d3d3'></TextInput>
            <Image
              source={require("../../assets/images/image20.png")}
              style={{ position: 'absolute', top: 20, right: 60, width: 40, height: 40, opacity: 0.5 }}
            />

            <Image
              source={require("../../assets/images/bellicon.png")}
              style={{ position: 'absolute', top: -123, right: 16, width: 30, height: 30, }}
            />
          </View>
        </ImageBackground>
      </View>

      <ScrollView>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>Top Trending</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({ item }) => (
              <View style={{ paddingVertical: 10, paddingLeft: 16 }}>
                <TouchableOpacity onPress={() => handleImagePress(item.title)}>
                  <Image source={item.source} style={{ width: 150, marginRight: 8, height: 190, borderRadius: 10 }} />
                  <View style={styles.ImageOverlay}></View>
                  <Image
                    source={require("../../assets/images/map.png")}
                    style={styles.mapStyle} />
                  <Text style={styles.ImageText}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {/*popular places */}
        <View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>Popular Places</Text>
          </View>
          <FlatList
            horizontal={true}
            data={populargallery}
            renderItem={({ item }) => (
              <View style={{ paddingVertical: 10, paddingLeft: 16 }}>
                <TouchableOpacity onPress={() => handlePopularImagePress(item.title)}>
                  <Image source={item.source} style={{ width: 240, marginRight: 8, height: 190, borderRadius: 10 }} />
                  <View style={styles.ImageOverlayPopular}></View>
                  <Image
                    source={require("../../assets/images/map.png")}
                    style={styles.mapStyle} />
                  <Text style={styles.ImageText}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center'
  },
  DarkOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 220,
    backgroundColor: '#000',
    opacity: 0.3,
    borderBottomRightRadius: 65

  },
  searchContainer: {
    paddingTop: 70,
    paddingLeft: 16
  },
  UserGreet: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff5ee'
  },
  UserText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff5ee'
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: '90%',
    height: 50
  },
  ImageOverlay: {
    width: 150,
    marginRight: 8,
    height: 190,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.3
  },
  ImageText: {
    position: 'absolute',
    color: 'white',
    marginTop: 4,
    fontSize: 15,
    left: 35,
    bottom: 10,
    fontWeight: 'bold'
  },
  mapStyle: {
    position: 'absolute',
    marginTop: 4,
    fontSize: 14,
    left: 10,
    bottom: 10,
    width: 20,
    height: 20,
  },
  ImageOverlayPopular: {
    width: 240,
    marginRight: 8,
    height: 190,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.3
  },
});

export default Index;
