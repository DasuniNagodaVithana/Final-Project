import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Custominput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';

interface Location {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const MapScreen: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [searchText, setSearchText] = useState('');

  const handleLocationSelect = (data: any, details: any) => {
    // Extract the necessary information from the selected location
    const { geometry } = details;
    const { location } = geometry;
    setSelectedLocation({
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    });
  };

  const handleSearch = async (e: any) => {
    try {
      
      // Perform a search using the entered text (searchText)
      const apiKey = 'AIzaSyACM6kL3cs1_eN_AtgZiqZSQuT-UnsBEzg';
      const encodedQuery = encodeURIComponent(searchText);
      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedQuery}&key=${apiKey}`;
      
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Check if the search returned valid results
      if (data.status === 'OK' && data.results.length > 0) {
        const firstResult = data.results[0];
        const { geometry } = firstResult;
        const { location } = geometry;
        
        console.log('Found the following coordinates. ', location);
        // Update selectedLocation with the search result
        setSelectedLocation({
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        });
      } else {
        // Handle case when no results are found
        // You might want to display a message or handle it as needed
        console.log('No results found.');
      }
    } catch (error) {
      // Handle any potential errors during the search
      console.error('Error during search:', error);
    }
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={handleLocationSelect}
        query={{
          key: 'AIzaSyACM6kL3cs1_eN_AtgZiqZSQuT-UnsBEzg', 
          language: 'en',
          types: 'geocode',
        }}
        styles={{
          container: {
            flex: 1, // Set flex to 1 to take up the available space
          },
          textInputContainer: {
            width: '100%',
            height: 40, // Set a specific height
          },
          description: {
            fontWeight: 'bold',
          },
        }}
      />
      <Custominput
        value={searchText}
        setvalue={setSearchText}
        placeholder="Search"
        secureTextEntry={false} // Change this based on your need}
        onKeyPress={handleSearch}
        icon='search'
      /> 

    <CustomButton 
     text='Sign In'
     onPress={() => console.log(searchText)}
     style={{width: "20%"}}
     />

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={selectedLocation || {
          latitude: 7.8731, // Sri Lanka latitude
          longitude: 80.7718, // Sri Lanka longitude
          latitudeDelta: 7,
          longitudeDelta: 7,
        } }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: '85%',
  },
});

export default MapScreen;
