import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';

interface Hotel {
  name: string;
  address: string;
  contactNumber: string;
  // Add more properties based on your hotel API response
}

const Favourite: React.FC = () => {
  const [input, setInput] = useState('Paris'); // Set default city to Paris
  const [loading, setLoading] = useState(false);
  const [hotelData, setHotelData] = useState<Hotel[] | null>(null);

  const airbnbApi = {
    baseUrl: 'https://airbnb13.p.rapidapi.com/search-location',
    key: 'afc2813b96msh2a29f22185dcb96p131368jsncf99d3179834',
    host: 'airbnb13.p.rapidapi.com',
  };

  const fetchHotelData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(airbnbApi.baseUrl, {
        params: {
          location: input,
          checkin: '2023-09-16',
          checkout: '2023-09-17',
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

      console.log(response.data);
      // Assuming the structure of the API response contains an array of hotels
      setHotelData(response.data.hotels);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [airbnbApi.baseUrl, airbnbApi.key, airbnbApi.host, input]);

  useEffect(() => {
    fetchHotelData(); // Fetch hotel data when the component mounts
  }, [fetchHotelData]);

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../../assets/images/hotel.jpg')}
        resizeMode="cover"
        style={styles.image}
      >
        <View>
          <TextInput
            placeholder="Enter City Name"
            onChangeText={(text) => setInput(text)}
            value={input}
            placeholderTextColor={'grey'}
            style={styles.textInput}
            onSubmitEditing={fetchHotelData}
          />
        </View>
        {loading && (
          <View>
            <ActivityIndicator size={'large'} color={'#000'} />
          </View>
        )}
        {hotelData && (
          <View style={styles.infoView}>
            {hotelData.map((hotel, index) => (
              <View key={index}>
                <Text style={styles.hotelName}>{hotel.name}</Text>
                <Text style={styles.hotelAddress}>{hotel.address}</Text>
                <Text style={styles.hotelContact}>{hotel.contactNumber}</Text>
              </View>
            ))}
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
  },
  textInput: {
    borderBottomWidth: 3,
    padding: 6,
    paddingVertical: 13,
    marginVertical: 70,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    fontSize: 19,
    borderRadius: 10,
    borderBottomColor: 'purple',
    color: 'black',
  },
  infoView: {
    alignItems: 'center',
  },
  hotelName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  hotelAddress: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 4,
  },
  hotelContact: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 4,
  },
});

export default Favourite;
