import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { Linking } from 'react-native';


interface Hotel {
  id: string;
  name: string;
  address: string;
  image: string;
  rating: number;
  type: string;
  url: string;
  
  
}
const openHotelUrl = (url: string) => {
  Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
};


const Search: React.FC = () => {
  const [location, setLocation] = useState('');
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [hotels, setHotels] = useState<Hotel[]>([]);

  const airbnbApi = {
    baseUrl: 'https://airbnb13.p.rapidapi.com/search-location',
    key: 'afc2813b96msh2a29f22185dcb96p131368jsncf99d3179834',
    host: 'airbnb13.p.rapidapi.com',
  };

  const searchHotels = async () => {
    try {
      const response = await axios.get(airbnbApi.baseUrl, {
        params: {
          location,
          checkin: checkinDate,
          checkout: checkoutDate,
          adults: '1',
          children: '0',
          infants: '0',
          pets: '0',
          page: '1',
          currency: 'USD',
        },
        headers: {
          'X-RapidAPI-Key': airbnbApi.key,
          'X-RapidAPI-Host': airbnbApi.host,
        },
      });
      const hotelsData = response.data.results; 

      const formattedHotels = hotelsData.map((hotel: any) => ({
        id: hotel.id,
        name: hotel.name,
        address: hotel.address,
        image: hotel.images[0],
        rating: hotel.rating,
        type: hotel.type,
        url: hotel.url,

      }));
      console.log(response.data);

      setHotels(formattedHotels);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }: { item: Hotel }) => (
    <TouchableOpacity style={styles.hotelItem}>
      <Image source={{ uri: item.image }} style={styles.hotelImage} />
      <View style={styles.hotelDetails}>
        <Text style={styles.hotelName}>{item.name}</Text>
        <Text style={styles.hotelAddress}>{item.address}</Text>
        <Text style={styles.hotelUrl} onPress={() => openHotelUrl(item.url)}>{item.url}</Text>

      </View>
    </TouchableOpacity>
  );

  return ( 
    <View style={styles.container}>    
    <View>
    <Text style={styles.heading}>Let's Find the best place to stay </Text>
      </View>  
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Enter Location"
          placeholderTextColor={'grey'}
          style={styles.input}
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <TextInput
          placeholder="Check-in Date (2023-12-20)"
          placeholderTextColor={'grey'}
          style={styles.input}
          value={checkinDate}
          onChangeText={(text) => setCheckinDate(text)}
        />
        <TextInput
          placeholder="Check-out Date (2023-12-21)"
          placeholderTextColor={'grey'}
          style={styles.input}
          value={checkoutDate}
          onChangeText={(text) => setCheckoutDate(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={searchHotels}>
  <Text style={styles.buttonText}>Search</Text>
</TouchableOpacity>
      </View>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.hotelList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
  },
  heading:{
    alignItems:'center',
    fontSize:22,
    color:'#1e90ff',
    fontWeight:'bold',
    fontFamily: 'Outfit-Bold',
    margin:10,
    textAlign:'center'
  },
  searchContainer: {
    marginBottom: 16,
    borderRadius:25, 
  },
  searchButton: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 15,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 8,
    fontSize: 16,
    color: 'black'
  },
  hotelList: {
    flex: 1,
  },
  hotelItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  hotelImage: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
  },
  hotelDetails: {
    flex: 1,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'black'
  },
  hotelAddress: {
    fontSize: 16,
    color: 'black'
  },
  hotelUrl: {
    fontSize: 14,
    color: 'blue', 
    textDecorationLine: 'underline', 
    marginTop: 4, 
  },
});

export default Search;
