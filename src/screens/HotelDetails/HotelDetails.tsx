import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';

interface Hotel {
    id: string;
    name: string;
    address: string;
    image: string;
    rating: number;
    type: string;
    
  }

type RootStackParamList = {
  HotelDetails: { hotel: Hotel }; 
};

type HotelDetailsRouteProp = RouteProp<RootStackParamList, 'HotelDetails'>;

type Props = {
  route: HotelDetailsRouteProp;
};

const HotelDetails: React.FC<Props> = ({ route }) => {
    const { hotel } = route.params;
  
    return (
      <View>
        <Text>{hotel.name}</Text>
        <Text>{hotel.address}</Text>
        <Text>{hotel.image}</Text>
        <Text>{hotel.rating}</Text>
        <Text>{hotel.type}</Text>
      </View>
    );
  };

export default HotelDetails;
