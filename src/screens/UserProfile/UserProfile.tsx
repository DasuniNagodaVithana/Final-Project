/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Image } from 'react-native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingComponent from '../../components/Settingcomponent/settingComponent';

const UserProfile: React.FunctionComponent = () => {

  return (
    <View style={styles.container}>
      <View style={styles.appHeaderContainer}>
        <TouchableOpacity>
          <Text>
          <Icon name="chevron-left" style={styles.iconStyle}/>
          </Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>User Profile</Text>
        <View><Text>
          <Icon name="chevron-right" style={styles.iconStyle}/>
          </Text></View>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../../assessts/images/profile-icon-9.png')}
          style={styles.profileImage}
        />
        <Text style={styles.title}>John Doe</Text>
      </View>

      <View style={styles.profileContainer}>
        <SettingComponent
          iconName="user"
          headerText="Username"
          subheaderText="John Doe"
          subheaderText2="Edit"
        />
        <SettingComponent 
          iconName="envelope"
          headerText="Email"
          subheaderText="johndeo@gmail.com"
          subheaderText2="Edit"
        />
        <SettingComponent
          iconName="phone"
          headerText="Phone Number"
          subheaderText="+1 123 456 7890"
          subheaderText2="Edit"
        />
        <SettingComponent
          iconName="map-marker"
          headerText="Location"
          subheaderText="New York, USA"
          subheaderText2="Edit"
        />
        <SettingComponent
          iconName="lock"
          headerText="Password"
          subheaderText="********"
          subheaderText2="Edit"
        />

      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  appHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  iconStyle: {
    fontSize: 23,
    color: '#359CBB',
  },

  /*iconBackground: {
    backgroundColor: '#359CBB',
    borderRadius: 35,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },*/

  headerText: {
    flex: 1,
    fontSize: 25,
    fontFamily: 'Outfit-Bold',
    color: '#359CBB',
    textAlign: 'center',
  },
  empty: {
    width: 30,
    height: 30,
  },

  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 90,
    marginVertical: 10,
    borderColor: '#359CBB',
    borderWidth: 2,
  },

  title: {
    fontSize: 20,
    color: '#359CBB',
    letterSpacing: 1,
    fontFamily: 'Urbanist-Medium',
    marginTop: 10,
  },

  button: {
    backgroundColor: '#5A7FD6',
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 18,
  },
});

export default UserProfile;
