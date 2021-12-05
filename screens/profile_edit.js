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

import * as ImagePicker from "expo-image-picker";
import { globalStyles } from "../styles/global";
import { Asset } from "expo-asset";
import blankPFP from "../assets/blankPFP.png";
import{Icon} from "react-native-elements";

export default function ProfileEdit({ route, navigation }) {
  const {userID} = route.params;
  const [selectedImage, setSelectedImage] = React.useState(null);

  var currentImage = Asset.fromModule(require("../assets/blankPFP.png")).uri;
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    currentImage = selectedImage.localUri;
  }

  return (
    <View style={{ backgroundColor: "#EFF0F4" }}>
      <TouchableOpacity
        style={[globalStyles.editBtn, {height: "5%"}]}
        onPress={() => navigation.navigate("Profile", userID)}
      >
        <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
          Save
        </Text>
      </TouchableOpacity>
      <Image
        source={{ uri: currentImage }}
        style={[globalStyles.picture, { marginTop: "10%" }]}
      />
      <TouchableOpacity
        style={[globalStyles.picturePicker, { marginBottom: "8%" }]}
        onPress={openImagePickerAsync}
      >
        <Text style={globalStyles.ButtonsText}>Choose a profile picture!</Text>
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <View style={globalStyles.inputView}>
          <TextInput
            style={globalStyles.ProfileInput}
            textAlign="center"
            placeholder="John Doe"
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={globalStyles.inputView}>
          <TextInput
            style={globalStyles.ProfileInput}
            textAlign="center"
            placeholder="616-222-5555"
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={globalStyles.inputView}>
          <TextInput
            style={globalStyles.ProfileInput}
            textAlign="center"
            placeholder="doeadeer"
            placeholderTextColor="#003f5c"
          />
        </View>
      </View>

<View style={globalStyles.navigationBarProfileEdit}>
      <Icon 
        raised
        name = "person"
        onPress={() => navigation.navigate("Profile")}
        
      />
      <Icon
      raised 
      name= "home"
      type="ionicon"
      onPress={() => navigation.navigate("Home")}
      
      />
      <Icon
        raised
        name= "log-out"
        type="ionicon"
        onPress={() => navigation.navigate("Start")} 
      />
      </View>
    </View>
  );
}
