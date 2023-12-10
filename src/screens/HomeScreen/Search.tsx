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
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HotelDetails from '../HotelDetails';

import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<any, any>;
}


const Search: React.FC<Props> = ({ navigation }) => {
  const [location, setLocation] = useState('');
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [hotels, setHotels] = useState<Hotel[]>([]);

  interface Hotel {
    id: string;
    name: string;
    address: string;
    image: string;
    rating: number;
    type: string;
    // Add more properties based on your hotel API response
  }

  
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
      const hotelsData = response.data.results; // Assuming the hotel data is in the 'results' property

      const formattedHotels = hotelsData.map((hotel: any) => ({
        id: hotel.id,
        name: hotel.name,
        address: hotel.address,
        image: hotel.images[0],
        rating: hotel.rating,
        type: hotel.type,

      }));
      console.log(response.data);

      setHotels(formattedHotels);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }: { item: Hotel }) => (
    <TouchableOpacity style={styles.hotelItem} onPress={() => navigation.navigate('HotelDetails', { hotel: item })}>
      <Image source={{ uri: item.image }} style={styles.hotelImage} />
      <View style={styles.hotelDetails}>
        <Text style={styles.hotelName}>{item.name}</Text>
        <Text style={styles.hotelAddress}>{item.address}</Text>
      </View>
      
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Enter Location"
          style={styles.input}
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <TextInput
          placeholder="Check-in Date"
          style={styles.input}
          value={checkinDate}
          onChangeText={(text) => setCheckinDate(text)}
        />
        <TextInput
          placeholder="Check-out Date"
          style={styles.input}
          value={checkoutDate}
          onChangeText={(text) => setCheckoutDate(text)}
        />
        <Button title="Search" onPress={searchHotels} />
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
  searchContainer: {
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 8,
    fontSize: 16,
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
  },
  hotelAddress: {
    fontSize: 16,
  },
});

export default Search;
