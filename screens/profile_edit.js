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

import * as ImagePicker from 'expo-image-picker';
import { globalStyles } from '../styles/global';
import { Asset } from "expo-asset";
import blankPFP from '../assets/blankPFP.png'

export default function ProfileEdit({navigation}){
    const[selectedImage, setSelectedImage] = React.useState(null);
    const [dogList, setDogs] = useState([
        { name: "Fido", key : '1'},
        { name: "Rover", key: '2'},
        { name: "Snowball", key: '3'},
        { name: "Add dog!", key: '4'},
    ]);

    var currentImage = Asset.fromModule(require('../assets/blankPFP.png')).uri;
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
        currentImage = selectedImage.localUri;
    }

    //Save button should navigate back to profile screen and send all current data to database - needs location from database

    return(
        <View style={globalStyles.container}>
            <TouchableOpacity style={globalStyles.editBtn} onPress={() => navigation.navigate('Profile')}>
                <Text style={globalStyles.loginText, globalStyles.ButtonsText}>Save</Text>
            </TouchableOpacity>
            <View style={[globalStyles.inputView, {marginTop: 70}]}>
                <TextInput
                    style={globalStyles.TextInput}
                    placeholder="John Doe"
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View style={globalStyles.inputView}>
                <TextInput
                    style={globalStyles.TextInput}
                    placeholder="616-222-5555"
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View style={globalStyles.inputView}>
                <TextInput
                    style={globalStyles.TextInput}
                    placeholder="doeadeer"
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View style={[globalStyles.container, {marginBottom: 30, marginTop: 30}]}>
                <Image source={{uri:currentImage}} style={globalStyles.picture}/>
            </View>
            <TouchableOpacity style={globalStyles.picturePicker} onPress={openImagePickerAsync}>
                <Text style={globalStyles.ButtonsText}>Choose a profile picture!</Text>
            </TouchableOpacity>
            <FlatList data={dogList} renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('DogProfileEdit', item.name)} 
                        style={{fontSize: 20,
                            backgroundColor: '#195F6B',
                            borderRadius: 25,
                            width: 100,
                            height: 30,
                            justifyContent: 'center', marginTop: 20}}>
                        <Text style={globalStyles.tagText}>{item.name}</Text>
                    </TouchableOpacity>
                )}/>
        </View>
    );
}