import React, { useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TextInputProps, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CustomInputProps extends TextInputProps {
  value: string;
  setvalue: (text: string) => void;
  placeholder: string;
  secureTextEntry: boolean;
  keyPress?: () => void;
  icon: string; // New prop for the icon name
}

const Custominput = ({ value, setvalue, placeholder, secureTextEntry, keyPress, icon }: CustomInputProps) => {

  const textInputRef = useRef<TextInput>(null);

  const handleKeyPress = (e: any) => {
    if (e.nativeEvent.key === 'Enter' && keyPress) {
      Keyboard.dismiss(); // Dismiss the keyboard
      keyPress(); // Call the keyPress function when Enter is pressed
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name={icon} size={20} color="#2f4f4f" style={styles.icon} />
        <TextInput
          ref={textInputRef}
          value={value}
          onChangeText={setvalue}
          style={styles.input}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor="#d3d3d3"
          onKeyPress={handleKeyPress} // Listen for key press event
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
