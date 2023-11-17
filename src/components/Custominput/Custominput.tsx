import { View, Text, StyleSheet,TextInput,TextInputProps, } from 'react-native';
import React from 'react';

interface CustomInputProps extends TextInputProps {
  value: string;
  setvalue: (text: string) => void;
  placeholder: string;
  secureTextEntry:boolean;
}

const Custominput = ({ value, setvalue, placeholder,secureTextEntry }: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setvalue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#d3d3d3"
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8ff', 
    width:'100%',

    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:5,

    paddingHorizontal:10,
    marginVertical:5
  },
  input:{
    color:'black'

  }
});

export default Custominput;
