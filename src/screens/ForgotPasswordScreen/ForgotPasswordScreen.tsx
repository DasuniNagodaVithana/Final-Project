import React ,{useState}from 'react';
import { View, Text, StyleSheet,useWindowDimensions } from 'react-native';
import Custominput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen: React.FC = () => {
  const [username,setUsername]=useState('');
  const navigation =useNavigation();
  

  //CustomButton function 
  const onSendPressed = async () => {
    try {
      await auth().sendPasswordResetEmail(username); // Send password reset email
      navigation.navigate('NewPassword');l
      console.log('Password reset email sent. Please check your email.');
    } catch (error) {
      console.error('Error sending reset email:', error);
      // Handle error scenarios (e.g., invalid email, network issues, etc.)
    }
  };
  
  const onSignInPressed=() =>{
    navigation.navigate('SignIn');
  }
  const onResendPressed=() =>{
    console.warn('Resend')
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <Custominput 
      placeholder='Username (Email)'
      value={username}
      setvalue={setUsername}
      secureTextEntry={false}
      icon='user'
      />
            
     <CustomButton 
     text='Send'
     onPress={onSendPressed}
     />
     
    <CustomButton 
     text="Back to Sign in"
     onPress={onSignInPressed}
     type='TERTIARY'
     />
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

export default ForgotPasswordScreen;
