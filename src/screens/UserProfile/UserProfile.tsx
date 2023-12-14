/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    ImageBackground,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    Alert,
} from 'react-native';


interface UserData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  location: string;
}

const UserProfile = () => {
    const [userData, setUserData] = useState<UserData>({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        location: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [originalValues, setOriginalValues] = useState<UserData>({...userData});

    useEffect(() => {
        // Save the original values when entering edit mode
        if (isEditing) {
        setOriginalValues({...userData});
        }
    }, [isEditing]);

    //handle edit button
    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = async () => {
        setIsEditing(false);
        try {
            const currentUser = auth().currentUser;
            if (currentUser) {
                const userDocRef = firestore().collection('users').doc(currentUser.uid);
                
                if (!userData.username.trim()) {
                    Alert.alert('Username cannot be empty');
                    return; 
                }

                const updatedUserData = {
                username: userData.username || '',
                email: userData.email || '',
                firstName: userData.firstName || '',
                lastName: userData.lastName || '',
                phoneNumber: userData.phoneNumber || '',
                location: userData.location|| '',
                };
                await userDocRef.update(updatedUserData);

                Alert.alert('Data updated successfully!');
            } else {
                console.error('User not authenticated');
            }
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    //handle cancel button
    const handleCancelClick = () => {
        setUserData({...originalValues});
        setIsEditing(false);
    };

    const fetchUserDetails = async () => {
        const currentUser = auth().currentUser;
        if (currentUser) {
            firestore()
                .collection('users')
                .doc(currentUser.uid)
                .get()
                .then(snapshot => {
                    if (snapshot.exists) {
                        const userDataFromFirestore = snapshot.data();
                        setUserData(userDataFromFirestore as UserData);
                        console.log(userDataFromFirestore);
                        Alert.alert('GET');
                    } else {
                        Alert.alert('Document does not exist');
                    }
                })
                .catch(error => {
                    Alert.alert('Something Went Wrong');
                });
        } else {
            Alert.alert('User not authenticated');
        }
    };

    useEffect(() => {
        fetchUserDetails();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            
        <ImageBackground
            source={require('../../assets/images/sky1.jpg')}
            style={styles.imageBackground}>
                <Text style={styles.title} >User Profile</Text>
        </ImageBackground>
        
        <ScrollView style={styles.overlayContainer}>
            <Text style={styles.text}> User Name:</Text>
            <TextInput
            style={styles.input}
            value={userData.username}
            onChangeText={text => setUserData({...userData, username: text})}
            editable={isEditing}
            />

            <Text style={styles.text}> Email:</Text>
            <TextInput
            style={styles.input}
            value={userData.email}
            onChangeText={text => setUserData({...userData, email: text})}
            editable={!isEditing}
            />

            <Text style={styles.text}> First Name:</Text>
            <TextInput
            style={styles.input}
            value={userData.firstName}
            onChangeText={text => setUserData({...userData, firstName: text})}
            editable={isEditing}
            />

            <Text style={styles.text}> Last Name:</Text>
            <TextInput
            style={styles.input}
            value={userData.lastName}
            onChangeText={text => setUserData({...userData, lastName: text})}
            editable={isEditing}
            />

            <Text style={styles.text}> Location:</Text>
            <TextInput
            style={styles.input}
            value={userData.location}
            onChangeText={text => setUserData({...userData, location: text})}
            editable={isEditing}
            />

            <Text style={styles.text}> Phone Number:</Text>
            <TextInput 
            style={styles.input}
            value={userData.phoneNumber}
            onChangeText={text => setUserData({...userData, phoneNumber: text})}
            editable={isEditing}
            />
        </ScrollView>
        
        <View style={styles.topConatiner}>
            <Image
            source={require('../../assets/images/profile-icon-9.png')}
            style={styles.ProfileImage}
            />
        </View>
        </SafeAreaView>
    );
};

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: '#6699CC',
        borderWidth: 6,
        borderRadius: 20,
        overflow: 'hidden',
    },
    imageBackground: {
        flex: 1 / 4,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    overlayContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
        borderRadius: 20,
        top: '18%',
        elevation: 180,
    },
    textContainer: {
        marginTop: 30,
        padding: 20,
    },
    Topic: {
        fontWeight: '900',
        fontSize: 32,
        elevation: 40,
        color: 'white',
        top: '12%',
        left: '34%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#6699CC',
        marginBottom: 10,
        margin: 12,
        marginTop: 30,
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 40,
        color: '#DDF1D3',
        marginBottom: 10,
        margin: 12,
        marginTop: 30,
    },
    input: {
        height: 40,
        borderColor: '#DDF1D3',
        backgroundColor: '#DDF1D3',
        color: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginLeft: 30,
        marginRight: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 35,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        left: '26%',
    },
    editIconContainer: {
        position: 'absolute',
        top: '58%',
        right: '10%',
        backgroundColor: 'white',
        width: 35,
        height: 35,
        borderRadius: 30,
        padding: 5,
        elevation: 150,
    },
    editIconImage: {
        width: 20,
        height: 20,
        top: 3,
        left: 3,
    },
    ProfileImage: {
        width: 75,
        height: 75,
        left: 3,
        top: '2%',
    },
    topConatiner: {
        ...StyleSheet.absoluteFillObject,
        width: 90,
        height: 90,
        top: '12%',
        left: '40%',
        backgroundColor: '#D3D3D3',
        borderRadius: 100,
        elevation: 50,
        borderWidth: 5,
        borderColor: '#6699CC',
    },
});

export default UserProfile;