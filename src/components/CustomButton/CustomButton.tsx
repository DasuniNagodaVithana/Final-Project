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
    marginVertical:6,
    borderRadius:25,
    alignItems:'center',
    paddingLeft:5,
    paddingRight:30,
    paddingTop:10,
    paddingBottom:10
    
  },
  container_PRIMARY:{
    backgroundColor:'#359CBB',

  },
  container_SECONDARY:{
    borderColor:'#359CBB',
    borderWidth:2,
  },
  container_TERTIARY:{
    

  },

  text:{
    fontWeight:'bold',
    fontSize:20,
    color:'#2f4f4f',
    alignItems:'center'
  },
  text_SECONDARY:{
    color:'#800000'
  },
  text_TERTIARY:{
    color:'grey'
  }
});

export default CustomButton