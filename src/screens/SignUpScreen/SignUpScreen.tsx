import React ,{useState}from 'react';
import { View, Text, StyleSheet,useWindowDimensions } from 'react-native';
import Custominput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import auth,{ FirebaseAuthTypes } from '@react-native-firebase/auth';

const SignUpScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');
  const navigation = useNavigation();


  //CustomButton function 
  const onRegisterPressed = async () => {
    try {
      if (password !== passwordRepeat) {
        console.warn('Passwords do not match');
        return;
      }
  
      const { user }: FirebaseAuthTypes.UserCredential = await auth().createUserWithEmailAndPassword(email, password);
  
      // Additional user data can be updated here if needed
      await user?.updateProfile({
        displayName: username,
      });
  
      navigation.navigate('ConfirmEmail');
    } catch (error:any) {
      console.error('Error registering user:', error.message);
    }
  };

  
  const onSignInPressed=() =>{
    navigation.navigate('SignIn');
  }
  const onTermsOfUsePressed=() =>{
    console.warn('Terms')
  }
  const onPrivacyPressed=() =>{
    console.warn('privacy')
  }




  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account </Text>

      <Custominput 
      placeholder='Username'
      value={username}
      setvalue={setUsername}
      secureTextEntry={false}
      />
      <Custominput 
      placeholder='Email'
      value={email}
      setvalue={setEmail}
      secureTextEntry={false}
      />

      <Custominput 
      placeholder='Password'
      value={password}
      setvalue={setPassword}
      secureTextEntry={true}/>

      <Custominput 
      placeholder='RepeatPassword'
      value={passwordRepeat}
      setvalue={setPasswordRepeat}
      secureTextEntry={true}/>

      
     <CustomButton 
     text='Register'
     onPress={onRegisterPressed}
     />
     
    <Text style={styles.text}>By registering, you confirm that you accept our{''}<Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and <Text style={styles.link}onPress={onPrivacyPressed}>Privacy Policy</Text> 
    </Text>

    <SocialSignInButtons/>

<CustomButton 
     text="Have an account? Sign in"
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

export default SignUpScreen;
