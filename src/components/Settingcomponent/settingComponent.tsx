/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const SettingComponent = (props:any) => {
  return (
    <View style={styles.container}>
        <View>
            <Icon name={props.iconName} style={styles.iconStyle}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{props.headerText}</Text>
            <Text style={styles.subtitle}>{props.subheaderText}</Text>
    </View>
    <View style={styles.iconBackground}>
        <Text>
            <Icon name="pencil" style={styles.iconStyle}/>
        </Text>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  textContainer: {
    flex: 1,
    },

    iconStyle: {
        fontSize: 24,
        color: '#359CBB',
        paddingHorizontal: 20,

    },
    iconBackground: {
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Outfit-Bold',
        fontSize: 18,
        color: '#359CBB',
        marginBottom: 5,
    },
    subtitle: {
        fontFamily: 'Outfit-Regular',
        fontSize: 15,
        color: '#359CBB',
    },



});


export default SettingComponent;
