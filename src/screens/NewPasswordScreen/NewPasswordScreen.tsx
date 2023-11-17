import React ,{useState}from 'react';
import { View, Text, StyleSheet,useWindowDimensions } from 'react-native';
import Custominput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const NewPasswordScreen: React.FC = () => {
  const [code,setCode]=useState('');
  const [newPassword,setNewPassword]=useState('');

  const navigation = useNavigation();

  //CustomButton function 
  const onSubmitPressed=()=>{
    navigation.navigate('Home');
  }
  
  const onSignInPressed=() =>{
    navigation.navigate('SignIn');
  }
  
  
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <Custominput 
      placeholder='Code'
      value={code}
      setvalue={setCode}
      secureTextEntry={false}
      />
      <Custominput 
      placeholder='Enter your New Password'
      value={newPassword}
      setvalue={setNewPassword}
      secureTextEntry={false}
      />
      

      
     <CustomButton 
     text='Submit'
     onPress={onSubmitPressed}
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

export default NewPasswordScreen;
