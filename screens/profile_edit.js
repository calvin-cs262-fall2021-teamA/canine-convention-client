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

    return(
        <View style={{backgroundColor: '#EFF0F4'}}>
            <TouchableOpacity style={globalStyles.editBtn} onPress={() => navigation.navigate('Profile')}>
                <Text style={globalStyles.loginText, globalStyles.ButtonsText}>Save</Text>
            </TouchableOpacity>
            <Image source={{uri:currentImage}} style={[globalStyles.picture, {marginTop: "10%"}]}/>
            <TouchableOpacity style={[globalStyles.picturePicker, {marginBottom: "8%"}]} onPress={openImagePickerAsync}>
                <Text style={globalStyles.ButtonsText}>Choose a profile picture!</Text>
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
                <View style={globalStyles.inputView}>
                    <TextInput
                        style={globalStyles.ProfileInput}
                        textAlign= "center"
                        placeholder="John Doe"
                        placeholderTextColor="#003f5c"
                    />
                </View>
                <View style={globalStyles.inputView}>
                    <TextInput
                        style={globalStyles.ProfileInput}
                        textAlign= "center"
                        placeholder="616-222-5555"
                        placeholderTextColor="#003f5c"
                    />
                </View>
                <View style={globalStyles.inputView}>
                    <TextInput
                        style={globalStyles.ProfileInput}
                        textAlign= "center"
                        placeholder="doeadeer"
                        placeholderTextColor="#003f5c"
                    />
                </View>
            </View>
            <TouchableOpacity style={[globalStyles.picturePicker, {marginTop: "5%"}]} onPress={() => navigation.navigate('DogProfileEdit', "New dog")}>
                <Text style={globalStyles.ButtonsText}>Add a new dog</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={globalStyles.homeBtns}>
                <Text style={globalStyles.ButtonsText}>Remove a dog</Text>
            </TouchableOpacity> */}
        </View>
    );
}