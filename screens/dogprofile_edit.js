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

//Dog Edit Screen
export default function DogProfileEdit({ navigation, route }) {

  //Declare Variables
  const sizeButtons = ["Small", "Medium", "Large"];
  const genderButtons = ["Male", "Female"];
  const charButtons = ["Calm", "Playful", "Friendly"];
  const neuteredButtons = ["Neutered", "Not Neutered"];

  const {currentDog} = route.params;
  const {userID} = route.params;

  const [dogSize, setDogSize] = useState(sizeButtons.indexOf(currentDog.size));
  const [dogGender, setDogGender] = useState(genderButtons.indexOf(currentDog.gender));
  const [dogChar, setDogChar] = useState(charButtons.indexOf(currentDog.personality));
  var neutered = "Not Neutered";
  if (currentDog.neutered){
    neutered = "Neutered";
  }
  const [dogStatus, setDogStatus] = useState(neuteredButtons.indexOf(neutered));
  const [dogName, setDogName] = useState(currentDog.dogname);

  const dateToString = (date) => {
    var birthDate = new Date(date);
    let tempDate = birthDate.toString().split(" ");
    return(tempDate[1] + " " + tempDate[3]);
  };

  const [date, setDate] = useState(currentDog.birthdate);
  const [stringDate, setStringDate] = useState(dateToString(currentDog.birthdate));
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

  var currentImage = currentDog.image;
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
  //Update the new dog data and deploy to the database
  const updateDog = async () => {

    var neutered = false;
    if(neuteredButtons[dogStatus] === "Neutered"){
      neutered = true;
    }
    try{
      await Promise.all([
        fetch("http://canine-convention.herokuapp.com/dog/name/"+ currentDog.id, {method: 'PUT', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({"dogName": dogName})}),
        fetch("http://canine-convention.herokuapp.com/dog/birthdate/"+ currentDog.id, {method: 'PUT',
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({"Birthdate": date})}),
        fetch("http://canine-convention.herokuapp.com/dog/personality/"+ currentDog.id , {method: 'PUT',
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({"Personality": charButtons[dogChar]})}),
        fetch("http://canine-convention.herokuapp.com/dog/gender/"+ currentDog.id , {method: 'PUT',
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({"Gender": genderButtons[dogGender]})}),
        fetch("http://canine-convention.herokuapp.com/dog/neutered/"+ currentDog.id , {method: 'PUT',
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({"Neutered": neutered})}),
        fetch("http://canine-convention.herokuapp.com/dog/image/"+ currentDog.id , {method: 'PUT',
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({"image": currentImage})}),
        fetch("http://canine-convention.herokuapp.com/dog/size/"+ currentDog.id , {method: 'PUT',
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({"Size": sizeButtons[dogSize]})})
      ])

    }catch(error) {console.error(error)}
  };

  const removeDog = async () => {
    fetch("http://canine-convention.herokuapp.com/dog/"+ currentDog.id, {method: 'DELETE', 
          headers: { 'Content-Type': 'application/json' }})
  };


  //Display Buttons, Picutures, Input boxes, and selecting the new dog features
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
          onPress={() => removeDog().then(navigation.push("Profile", userID))}
        >
          <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
            Delete Dog
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{width: "15%", borderRadius: 25, height: "100%", justifyContent: "center", alignItems: "center",
            backgroundColor: "#195F6B", marginTop: "2%", marginLeft: "auto", marginRight: "2%"}}
          onPress={() => updateDog().then(navigation.push("Profile", userID))}
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
          defaultValue={currentDog.dogname}
          textAlign="center"
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
