import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  FlatList,
} from "react-native";
import {ButtonGroup} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { globalStyles } from '../styles/global';
import { Asset } from "expo-asset";
import blankDogPFP from '../assets/blankDogPFP.jpg';


export default function DogProfileEdit({navigation, route}){
    const [dogSize, setDogSize] = useState("");
    const [dogGender, setDogGender] = useState("");
    const [dogChar, setDogChar] = useState("");
    const [dogStatus, setDogStatus] = useState("");

    const[selectedImage, setSelectedImage] = React.useState(null);

    var currentImage = Asset.fromModule(require('../assets/blankDogPFP.jpg')).uri;
    let openImagePickerAsync = async() => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(permissionResult.granted === false){
            alert("Permission to access camera roll is required");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if(pickerResult.cancelled === true){
            return;
        }
        setSelectedImage({localUri: pickerResult.uri});
    };

    if(selectedImage !== null){
        //Change this to send image to database
        currentImage = selectedImage.localUri;
        // return (
        //     <View style={globalStyles.container}>
        //         <Image source={{uri:selectedImage.localUri}}
        //             style={{width: 200, height: 100, marginBottom: 30}}
        //         />
        //     </View>
        //  );
    }
    //Add dog birthdate field
    //Save button needs to also send current state to database

    return(
        <View style={{backgroundColor: '#EFF0F4'}}>
            <TouchableOpacity style={globalStyles.editBtn} onPress={() => navigation.navigate('ProfileEdit')}>
                <Text style={globalStyles.loginText}>Save</Text>
            </TouchableOpacity>
            <View style={[globalStyles.container, {marginTop: 200, marginBottom: 150}]}>
                <Image source={{uri:currentImage}} style={{width: 200, height: 100, marginBottom: 30}}/>
                <TouchableOpacity style={globalStyles.picturePicker} onPress={openImagePickerAsync}>
                    <Text style={globalStyles.tagText}>Choose a puppy profile picture!</Text>
                </TouchableOpacity>
                <View style={{backgroundColor: "#FFF", borderRadius: 30, 
                        width: "70%", height: 45, alignItems: "center"}}>
                    <TextInput
                        style={globalStyles.TextInput}
                        placeholder= {route.params}
                        placeholderTextColor="#003f5c"
                    />
                </View>
            </View>
            <ButtonGroup containerStyle={{marginTop: 30}}
                selectedButtonStyle={{backgroundColor: '#16BAC6'}}
                buttons={['Small', 'Medium', 'Large']}
                selectedIndex={dogSize}
                onPress={(value)=>{setDogSize(value);}}
            />
            <ButtonGroup containerStyle={{marginTop: 30}}
                selectedButtonStyle={{backgroundColor: '#16BAC6'}}
                buttons={['Male', 'Female']}
                selectedIndex={dogGender}
                onPress={(value)=>{setDogGender(value);}}
            />
            <ButtonGroup containerStyle={{marginTop: 30}}
                selectedButtonStyle={{backgroundColor: '#16BAC6'}}
                buttons={['Calm', 'Playful', 'Friendly']}
                selectedIndex={dogChar}
                onPress={(value)=>{setDogChar(value);}}
            />
            <ButtonGroup containerStyle={{marginTop: 30}}
                selectedButtonStyle={{backgroundColor: '#16BAC6'}}
                buttons={['Spayed', 'Neutered', 'Not']}
                selectedIndex={dogStatus}
                onPress={(value)=>{setDogStatus(value);}}
            />
        </View>
    );

}