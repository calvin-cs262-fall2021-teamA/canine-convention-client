import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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

//Add Dog Page
export default function AddDog({ navigation, route }) {
  
  //Declare Variables
  const sizeButtons = ["Small", "Medium", "Large"];
  const genderButtons = ["Male", "Female"];
  const charButtons = ["Calm", "Playful", "Friendly"];
  const neuteredButtons = ["Neutered", "Not Neutered"];

  const userID = route.params;
  const [dogSize, setDogSize] = useState("");
  const [dogGender, setDogGender] = useState("");
  const [dogChar, setDogChar] = useState("");
  const [dogStatus, setDogStatus] = useState("");
  const [dogName, setDogName] = useState("");
  var today = new Date();

  const dateToString = (date) => {
    var birthDate = new Date(date);
    let tempDate = birthDate.toString().split(" ");
    return(tempDate[1] + " " + tempDate[3]);
  };

  const [date, setDate] = useState(today);
  const [stringDate, setStringDate] = useState(dateToString(today.toString()));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    setDate(date);
    dateToString(date);
    setStringDate(dateToString(date));
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
    currentImage = selectedImage.localUri;
  }


  //Deploy new Dog data to database
  const createDog = async () => {

    var neutered = false;
    if(dogStatus === "Neutered"){
      neutered = true;
    }
    console.log(userID);
    console.log(dogName);
    console.log(date);
    console.log(charButtons[dogChar]);
    console.log(genderButtons[dogGender]);
    console.log(sizeButtons[dogSize]);
    console.log(neutered);
    console.log(currentImage);
    try{
      const response = await fetch(`http://canine-convention.herokuapp.com/dog`, {method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(
            {"personID": userID,
             "dogName": dogName,
             "Birthdate": date,
             "Personality": charButtons[dogChar],
             "Gender": genderButtons[dogGender],
             "Neutered": neutered,
             "Size": sizeButtons[dogSize],
             "image": currentImage}
        )});
      const json = await response.json();
      console.log(json);
      return json;
    }catch(error) {console.error(error)}
  };

  //Display Buttons, Pictures, and selectable dog attributes
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
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: "15%", borderRadius: 25, height: "100%", justifyContent: "center", alignItems: "center",
            backgroundColor: "#195F6B", marginTop: "2%", marginLeft: "auto", marginRight: "2%"}}
          onPress={() => createDog().then(navigation.push("Profile", userID))}
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
          placeholder={"Name your dog"}
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setDogName(name)}
        />
      </View>
      <ButtonGroup
        selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
        buttons={sizeButtons}
        selectedIndex={dogSize}
        onPress={(value) => {
          setDogSize(value);
        }}
      />
      <ButtonGroup
        containerStyle={{ marginTop: "2%" }}
        selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
        buttons={genderButtons}
        selectedIndex={dogGender}
        onPress={(value) => {
          setDogGender(value);
        }}
      />
      <ButtonGroup
        containerStyle={{ marginTop: "2%" }}
        selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
        buttons={charButtons}
        selectedIndex={dogChar}
        onPress={(value) => {
          setDogChar(value);
        }}
      />
      <ButtonGroup
        containerStyle={{ marginTop: "2%" }}
        selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
        buttons={neuteredButtons}
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
        Birthdate: {stringDate}
      </Text>
    </View>
  );
}
