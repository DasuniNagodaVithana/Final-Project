import React ,{useState}from 'react';
import { View, Text, Image,StyleSheet,useWindowDimensions } from 'react-native';
import Custominput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const Logo = require('../../assets/images/image1.jpg');

const SigninScreen: React.FC = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');


  const{height}=useWindowDimensions();
  const navigation = useNavigation();

  //CustomButton function 
  const onSignInPressed=()=>{
    
    //validate user
    navigation.navigate("Home")
  };
  const onForgotPasswordPressed=() =>{
    
    navigation.navigate('ForgotPassword')
  }
  
  const onSignUpPressed=() =>{
    navigation.navigate('SignUp')
  }


  return (
    <View style={styles.root}>
      <Image 
      source={Logo} 
      style={[styles.logo,{height:height*0.3}]} resizeMode='contain' />

      <Custominput 
      placeholder='Username'
      value={username}
      setvalue={setUsername}
      secureTextEntry={false}
      />

      <Custominput 
      placeholder='Password'
      value={password}
      setvalue={setPassword}
      secureTextEntry={true}/>
      
     <CustomButton 
     text='Sign In'
     onPress={onSignInPressed}
     />
     
     <CustomButton 
     text='Forgot password?'
     onPress={onForgotPasswordPressed}
     type='TERTIARY'
     />

     <SocialSignInButtons/>



<CustomButton 
     text="Don't have an account? create one"
     onPress={onSignUpPressed}
     type='TERTIARY'
     />
    </View>
  );
};

const styles=StyleSheet.create({
  logo:{
    width:'70%',
    maxHeight:200,
    maxWidth:300
  },
  root:{
    alignItems:'center',
    padding:20,
    
    flex:1,
  }
})

export default SigninScreen;
