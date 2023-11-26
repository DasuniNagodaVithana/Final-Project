import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

interface Location {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const MapScreen: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

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

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={handleLocationSelect}
        query={{
          key: 'AIzaSyACM6kL3cs1_eN_AtgZiqZSQuT-UnsBEzg', // Replace with your API key
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
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={selectedLocation || {
          latitude: 7.8731, // Sri Lanka latitude
          longitude: 80.7718, // Sri Lanka longitude
          latitudeDelta: 7,
          longitudeDelta: 7,
        }}
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
  },
});

export default MapScreen;
