import React ,{useState}from 'react';
import { View, Text, Image,StyleSheet,useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Custominput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Logo = require('../../assets/images/travellogo.jpg');

const SigninScreen: React.FC = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');


  const{height}=useWindowDimensions();
  const navigation = useNavigation();

  //CustomButton function 
  const onSignInPressed = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(username, password);

      // If successful, you can access the user data using userCredential.user
      console.log('User signed in:', userCredential.user);

      // Navigate to the Home screen or any other screen as needed
      navigation.navigate('Home');
    } catch (error:any) {
      console.error('Error signing in:', error.message);
      // Handle the error, display a message, or perform other actions
    }
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp' );
  };


  return (
    <View style={styles.root}>
      <Image 
      source={Logo} 
      style={[styles.logo,{height:height*0.3}]} resizeMode='contain' />

      <Custominput 
      placeholder='Email'
      value={username}
      setvalue={setUsername}
      secureTextEntry={false}
      icon='envelope'
      
      />

      <Custominput 
      placeholder='Password'
      value={password}
      setvalue={setPassword}
      secureTextEntry={true}
      icon='lock'/>
     
      
     <CustomButton 
     text='Sign In'
     onPress={onSignInPressed}
     />
     
     <CustomButton 
     text='Forgot password?'
     onPress={onForgotPasswordPressed}
     type='TERTIARY'
     
     />


<CustomButton 
     text="Don't have an account? create one"
     onPress={onSignUpPressed}
     type='TERTIARY'
     fgColor='#ff6347'
     />
    </View>
  );
};

const styles=StyleSheet.create({
  logo:{
    width:'70%',
    maxHeight:200,
    maxWidth:300,
    marginBottom:20
  },
  root:{
    alignItems:'center',
    padding:30,
    paddingTop:60,
    flex:1,
    backgroundColor:"white"
  }
})

export default SigninScreen;
