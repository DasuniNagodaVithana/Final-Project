import React ,{useState}from 'react';
import { View, Text, StyleSheet,useWindowDimensions } from 'react-native';
import Custominput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import auth,{ FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUpScreen: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');

  const navigation = useNavigation();

  const storeAdditionalUserData = async (
    userId: string | undefined,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    location: string
  ): Promise<void> => {
    if (userId) {
      try {
        await firestore()
          .collection('users')
          .doc(userId)
          .set({
            username,
            email,
            firstName,
            lastName,
            phoneNumber,
            location,
            // Any other fields you want to store
          });
        console.log('User data stored successfully');
      } catch (error) {
        console.error('Error storing user data:', error);
      }
    }
  };

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

      // Store additional user data in database or wherever you're managing user profiles
      await storeAdditionalUserData(user?.uid,username,email, firstName, lastName, phoneNumber, location);

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
        placeholder='First Name'
        value={firstName}
        setvalue={setFirstName}
        secureTextEntry={false}
        icon='user'
      />
      <Custominput
        placeholder='Last Name'
        value={lastName}
        setvalue={setLastName}
        secureTextEntry={false}
        icon='user'
      />
      <Custominput
        placeholder='Phone Number'
        value={phoneNumber}
        setvalue={setPhoneNumber}
        secureTextEntry={false}
        icon='phone'
      />
      <Custominput
        placeholder='Location'
        value={location}
        setvalue={setLocation}
        secureTextEntry={false}
        icon='map-marker'
      />

      <Custominput 
        placeholder='Username'
        value={username}
        setvalue={setUsername}
        secureTextEntry={false}
        icon='user'
      />
      <Custominput 
        placeholder='Email'
        value={email}
        setvalue={setEmail}
        secureTextEntry={false}
        icon='envelope'
      />

      <Custominput 
        placeholder='Password'
        value={password}
        setvalue={setPassword}
        secureTextEntry={true}
        icon='lock'/>

      <Custominput 
        placeholder='RepeatPassword'
        value={passwordRepeat}
        setvalue={setPasswordRepeat}
        secureTextEntry={true}
        icon='lock'/>

     <CustomButton 
      text='Register'
      onPress={onRegisterPressed}
     />
     
    <Text style={styles.text}>By registering, you confirm that you accept our{''}<Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and <Text style={styles.link}onPress={onPrivacyPressed}>Privacy Policy</Text> 
    </Text>

    
    <CustomButton 
      text="Have an account? Sign in"
      onPress={onSignInPressed}
      type='TERTIARY'
      fgColor='#ff6347'
    />
    </View>
  );
};

const styles=StyleSheet.create({
  
  root:{
    alignItems:'center',
    padding:20,
    flex:1,
    backgroundColor:"white"
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
