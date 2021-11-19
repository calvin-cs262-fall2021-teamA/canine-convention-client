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
  Modal,
} from "react-native";
import { ButtonGroup } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { globalStyles } from "../styles/global";
import { Asset } from "expo-asset";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import blankDogPFP from "../assets/blankDogPFP.jpg";

export default function DogProfileEdit({ navigation, route }) {
  const {currentDog} = route.params;
  const {userID} = route.params;

  const [dogSize, setDogSize] = useState("");
  const [dogGender, setDogGender] = useState("");
  const [dogChar, setDogChar] = useState("");
  const [dogStatus, setDogStatus] = useState("");

  const [date, setDate] = useState("Oct 2015");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    let tempDate = date.toString().split(" ");
    setDate(tempDate[1] + " " + tempDate[3]);
    hideDatePicker();
  };

  const [selectedImage, setSelectedImage] = React.useState(null);

  var currentImage = Asset.fromModule(require("../assets/blankDogPFP.jpg")).uri;
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

  return (
    <View style={{ backgroundColor: "#EFF0F4" }}>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <View style={globalStyles.row}>
        <TouchableOpacity
          style={{width: "30%", borderRadius: 25, height: "100%", justifyContent: "center", alignItems: "center", 
            backgroundColor: "#195F6B", marginTop: "2%", marginLeft: "2%"}}
          onPress={() => navigation.navigate("Profile", userID)}
        >
          <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
            Delete Dog
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{width: "15%", borderRadius: 25, height: "100%", justifyContent: "center", alignItems: "center",
            backgroundColor: "#195F6B", marginTop: "2%", marginLeft: "auto", marginRight: "2%"}}
          onPress={() => navigation.navigate("Profile", userID)}
        >
          <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: currentImage }}
        style={{
          width: "30%",
          marginBottom: "5%",
          height: "15%",
          marginLeft: "35%",
          marginTop: "5%"
        }}
      />
      <TouchableOpacity
        style={[globalStyles.picturePicker, { marginBottom: "5%" }]}
        onPress={openImagePickerAsync}
      >
        <Text style={globalStyles.tagText}>
          Choose a puppy profile picture!
        </Text>
      </TouchableOpacity>
      <View style={globalStyles.inputView}>
        <TextInput
          style={globalStyles.ProfileInput}
          textAlign="center"
          placeholder={currentDog}
          placeholderTextColor="#003f5c"
        />
      </View>
      <ButtonGroup
        selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
        buttons={["Small", "Medium", "Large"]}
        selectedIndex={dogSize}
        onPress={(value) => {
          setDogSize(value);
        }}
      />
      <ButtonGroup
        containerStyle={{ marginTop: "2%" }}
        selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
        buttons={["Male", "Female"]}
        selectedIndex={dogGender}
        onPress={(value) => {
          setDogGender(value);
        }}
      />
      <ButtonGroup
        containerStyle={{ marginTop: "2%" }}
        selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
        buttons={["Calm", "Playful", "Friendly"]}
        selectedIndex={dogChar}
        onPress={(value) => {
          setDogChar(value);
        }}
      />
      <ButtonGroup
        containerStyle={{ marginTop: "2%" }}
        selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
        buttons={["Neutered", "Not Neutered"]}
        selectedIndex={dogStatus}
        onPress={(value) => {
          setDogStatus(value);
        }}
      />
      <TouchableOpacity
        style={[globalStyles.picturePicker, { marginTop: "2%" }]}
        onPress={showDatePicker}
      >
        <Text style={globalStyles.tagText}>Select birthdate</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          marginRight: "auto",
          marginTop: "5%",
          marginLeft: "5%",
        }}
      >
        Birthdate: {date}
      </Text>
    </View>
  );
}
