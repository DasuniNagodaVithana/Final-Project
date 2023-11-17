import React ,{useState}from 'react';
import { View, Text, StyleSheet,useWindowDimensions } from 'react-native';
import Custominput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen: React.FC = () => {
  const [code,setCode]=useState('');
  const navigation =useNavigation();
  

  //CustomButton function 
  const onConfirmPressed=()=>{
    navigation.navigate('Home');
  }
  
  const onSignInPressed=() =>{
    navigation.navigate('SignIn');
  }
  const onResendPressed=() =>{
    console.warn('Resend')
  }
  

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confrim your email</Text>

      <Custominput 
      placeholder='Enter your confirmation Code'
      value={code}
      setvalue={setCode}
      secureTextEntry={false}
      />
      

      
     <CustomButton 
     text='Confirm'
     onPress={onConfirmPressed}
     />
     
     <CustomButton 
     text="Resend Code"
     onPress={onResendPressed}
     type='SECONDARY'
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

export default ConfirmEmailScreen;
