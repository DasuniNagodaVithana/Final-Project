import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';

interface WeatherData {
  name?: string;
  sys?: {
    country?: string;
  };
  main?: {
    temp?: number;
    temp_min?: number;
    temp_max?: number;
  };
  weather?: Array<{ description?: string }>;
}

const Favourite: React.FC = () => {
  const [input, setInput] = useState('Colombo'); // Set default city to Colombo
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<WeatherData | null>(null);

  const api = {
    key: '7cb9719faaba816e0107f7fd64928e81',
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  };

  const fetchDataHandler = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${api.baseUrl}weather?q=${input}&units=metric&appid=${api.key}`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [api.key, api.baseUrl, input]);

  useEffect(() => {
    fetchDataHandler(); // Fetch data when the component mounts
  }, [fetchDataHandler]);

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../../assets/images/sky1.jpg')}
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
            onSubmitEditing={fetchDataHandler}
          />
        </View>
        {loading && (
          <View>
            <ActivityIndicator size={'large'} color={'#000'} />
          </View>
        )}
        {data && (
          <View style={styles.infoView}>
            <Text style={styles.cityCountryText}>{`${data.name} ${data?.sys?.country}`}</Text>
            <Text style={styles.dateText}>{new Date().toLocaleString()}</Text>
            <Text style={styles.tempText}>{`${Math.round(data?.main?.temp || 0)} °C`}</Text>
            <Text style={styles.minMaxText}>{`Min: ${Math.round(
              data?.main?.temp_min || 0
            )}°C / Max: ${Math.round(data?.main?.temp_max || 0)}°C`}</Text>
            <Text style={styles.weatherConditionText}>
              {data?.weather && data.weather.length > 0 ? data.weather[0].description : ''}
            </Text>
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
  cityCountryText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 10,
  },
  tempText: {
    fontSize: 40,
    color: '#00008b',
    marginVertical: 10,
  },
  minMaxText: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 10,
    fontWeight: '500',
  },
  weatherConditionText: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export default Favourite;
