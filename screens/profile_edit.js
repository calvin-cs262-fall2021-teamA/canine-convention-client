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

//Profile Edit Screen
export default function ProfileEdit({ route, navigation }) {
  
  //Declare Variables
  const {userID} = route.params;
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [userID, setUserID] = useState(1);

  //Get a Picture from the cameraroll
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

  const getPersonInfo = async () => {
    try {
      const response = await fetch(
        "https://canine-convention.herokuapp.com/person/" + userID
      );
      const json = await response.json();
      setUserInfo(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  //Display Picture, Buttons, And the text boxes 
  return (
    <View style={{ backgroundColor: "#EFF0F4" }}>
      {/* save button */}
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
      {/* Change Picture button */}
      <TouchableOpacity
        style={[globalStyles.picturePicker, { marginBottom: "8%" }]}
        onPress={openImagePickerAsync}
      >
        <Text style={globalStyles.ButtonsText}>Choose a profile picture!</Text>
      </TouchableOpacity>
      {/* profile edit text boxes */}
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

{/* Default Navigation bar */}
<View style={globalStyles.navigationBarProfileEdit}>
      <Icon 
        raised
        name = "person"
        onPress={() => navigation.navigate("Profile", userID)}
        
      />
      <Icon
      raised 
      name= "home"
      type="ionicon"
      onPress={() => navigation.navigate("Home", userID)}
      
      />
      <Icon
        raised
        name= "log-out"
        type="ionicon"
        onPress={() => navigation.navigate("Start")} 
      />
      <Icon
        raised
        name= "help-outline"
        type="ionicon"
        onPress={() => navigation.navigate("ProfileEditHelp")} 
      />
      </View>
    </View>
  );
}
