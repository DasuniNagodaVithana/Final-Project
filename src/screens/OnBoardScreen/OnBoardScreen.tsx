import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';




const OnBoardScreen: React.FunctionComponent = () => {
  return (
    <ImageBackground
    source={require('../assessts/images/coast-3384845.jpg')}
    style={styles.profileImage}

    >
    <View style={styles.container}>  
            <Text style={styles.welcomeText}>Explore Sri Lanka with Us</Text>  
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Let's Go</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
      },
        profileImage: {
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
        },
        button: {
            backgroundColor: '#359CBB',
            width: 200,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
        },
        buttonText: {
            color: '#fff',
            fontSize: 20,
            fontFamily: 'Outfit-Bold',
        },
        welcomeText: {
            justifyContent: 'center',
            color: '#fff',
            fontSize: 35,
            fontFamily: 'Urbanist-Bold',
            textAlign: 'center',
            padding: 30,
        },
});

export default OnBoardScreen ;