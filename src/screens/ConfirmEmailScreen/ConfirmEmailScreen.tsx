import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import CustomButton from '../../components/CustomButton';

const ConfirmEmailScreen: React.FC = () => {
  const navigation = useNavigation();

  // Check if the user's email is verified when the component mounts
  useEffect(() => {
    const checkEmailVerification = async () => {
      const user = auth().currentUser;
      if (user && user.emailVerified) {
        // If email is verified, navigate to the Home screen or any other screen
        navigation.navigate('Home');
      }
    };

    checkEmailVerification();
  }, [navigation]);

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Check your email to verify your account</Text>

      <CustomButton text='Back to Sign in' onPress={onSignInPressed} type='TERTIARY' />
    </View>
  );
};

const styles=StyleSheet.create({
  
  root:{
    alignItems:'center',
    padding:20,
    
    flex:1,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#051C68',
    margin:10,
  },
  text:{
    color:'grey',
    marginVertical:10,

  },
  link:{
    color:'#FDB075'
  }
})

export default ConfirmEmailScreen;
