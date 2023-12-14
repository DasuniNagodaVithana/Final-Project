import { View, Text, StyleSheet, TextInput, TextInputProps } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CustomInputProps extends TextInputProps {
  value: string;
  setvalue: (text: string) => void;
  placeholder: string;
  secureTextEntry: boolean;
  keyPress?: (e: any) => void;
  icon: string; 
}

const Custominput = ({ value, setvalue, placeholder, secureTextEntry, keyPress, icon }: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name={icon} size={20} color="#2f4f4f" style={styles.icon} />
        <TextInput
          value={value}
          onChangeText={setvalue}
          style={styles.input}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor="#d3d3d3"
          onKeyPress={keyPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderColor: '#add8e6',
    borderWidth: 1.8,
    borderRadius: 19,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  placeholderText: {
    color: '#2f4f4f',
    marginRight: 10,
  },
  input: {
    width: '100%',
    color: 'black',
    backgroundColor: '#ffffff',
    height: 40,
    borderRadius: 15,
    paddingHorizontal: 7,
    
    flex: 1,
  },
});

export default Custominput;
