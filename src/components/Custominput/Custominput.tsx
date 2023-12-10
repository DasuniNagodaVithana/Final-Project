import { View, Text, StyleSheet,TextInput,TextInputProps, } from 'react-native';
import React from 'react';

interface CustomInputProps extends TextInputProps {
  value: string;
  setvalue: (text: string) => void;
  placeholder: string;
  secureTextEntry:boolean;
  keyPress?: (e: any) => void;
}

const Custominput = ({ value, setvalue, placeholder,secureTextEntry, keyPress }: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setvalue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#d3d3d3"
      onKeyPress={keyPress}
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
    color:'black',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 8,
    marginTop: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
  },
  searchBar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 8,
    marginTop: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default Custominput;
