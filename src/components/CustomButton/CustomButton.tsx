import { View, Text,StyleSheet,Pressable,PressableProps } from 'react-native'
import React from 'react';

interface CustomButtonProps extends PressableProps {
  onPress: () => void;
  text: string;
  type?: string;
  bgColor?:string;
  fgColor?:string
  
}
const CustomButton: React.FC<CustomButtonProps> = ({onPress,text,type='PRIMARY',bgColor,fgColor}) => {
  const containerStyle = styles[`container_${type}` as keyof typeof styles] || styles.container;
  const textStyle = styles[`text_${type}` as keyof typeof styles] || styles.text;
  return (
    <Pressable 
     onPress={onPress} 
     style={[styles.container, 
     containerStyle,
     bgColor ?{backgroundColor:bgColor}:{}
    ]}>
    <Text 
     style={[styles.text,
     textStyle,
     fgColor ?{color:fgColor}:{}
     ]}>
     {text}
      </Text>
    </Pressable>
  )
}
const styles=StyleSheet.create({
  container:{
    
    width:'100%',

    padding:15,
    marginVertical:5,
    borderRadius:5,
    alignItems:'center'
  },
  container_PRIMARY:{
    backgroundColor:'#3B71F3',

  },
  container_SECONDARY:{
    borderColor:'#3B71F3',
    borderWidth:2,
  },
  container_TERTIARY:{

  },

  text:{
    fontWeight:'bold',
    fontSize:17
  },
  text_SECONDARY:{
    color:'#3B71F3'
  },
  text_TERTIARY:{
    color:'grey'
  }
});

export default CustomButton