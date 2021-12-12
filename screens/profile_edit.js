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
  KeyboardAvoidingView,
  ScrollView, 
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { globalStyles } from "../styles/global";
import { Asset } from "expo-asset";
import blankPFP from "../assets/blankPFP.png";
import{Icon} from "react-native-elements";

/*
  Allows the user to edit their information
*/
export default function ProfileEdit({ route, navigation }) {
  
  //Declare Variables
  const {currentUser} = route.params;
  const {userID} = route.params;
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [email, setEmail] = useState(currentUser.email);
  //const [password, setPassword] = useState(currentUser.password);
  const [firstName, setFirst] = useState(currentUser.firstname);
  const [lastName, setLast] = useState(currentUser.lastname);
  const [phone, setPhone] = useState(currentUser.phone);

  //Sets up image picker
  var currentImage = currentUser.image;
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

  //Sends updated information to the database
  const updatePerson = async () => {
    try{
      await Promise.all([
        fetch("http://canine-convention.herokuapp.com/persons/name/"+ userID, {method: 'PUT', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({"firstName": firstName})}),
        fetch("http://canine-convention.herokuapp.com/persons/surname/"+ userID, {method: 'PUT',
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({"lastName": lastName})}),
        fetch("http://canine-convention.herokuapp.com/persons/email/"+ userID, {method: 'PUT',
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({"email": email})}),
        fetch("http://canine-convention.herokuapp.com/persons/phone/"+ userID, {method: 'PUT',
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({"phone": phone})}),
        fetch("http://canine-convention.herokuapp.com/persons/image/"+ userID , {method: 'PUT',
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({"image": currentImage})}),
        // fetch("http://canine-convention.herokuapp.com/persons/password/"+ userID , {method: 'PUT',
        //   headers: { 'Content-Type': 'application/json' }, 
        //   body: JSON.stringify({"Password": password})})
      ])

    }catch(error) {console.error(error)}
  };

  //Display Picture, Buttons, And the text boxes 
  return (
    <View style={{ backgroundColor: "#EFF0F4" }}>
      {/* save button */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} 
        //keyboardDissmissMode="on-drag"
        style={{ alignItems: "center", height: "90%", justifyContent: "center"}}>
        <TouchableOpacity
          style={[globalStyles.editBtn, {height: "5%"}]}
          onPress={() => updatePerson().then(navigation.push("Profile", userID))}
        >
          <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
            Save
          </Text>
        </TouchableOpacity>
        <Image
          source={{ uri: currentImage }}
          style={[globalStyles.picture, { marginTop: "5%", marginLeft: "0%"}]}
        />
        {/* Change Picture button */}
        <TouchableOpacity
          style={[globalStyles.picturePicker, { marginBottom: "4%", marginLeft: "0%"}]}
          onPress={openImagePickerAsync}
        >
          <Text style={globalStyles.ButtonsText}>Choose a profile picture!</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={{ alignItems: "center", height: "80%" }} scrollEnabled={true}>
      {/* profile edit text boxes */}
        <View style={[globalStyles.inputView, globalStyles.row, 
          {alignContent: "center", minHeight: "100%", marginTop: "-27%"}]}>
          <TextInput
            style={[globalStyles.ProfileInput, {height: "15%", width: "45%", marginLeft: "5%"}]}
            textAlign="center"
            defaultValue={firstName}
            onChangeText={(firstName) => setFirst(firstName)}
          />
          <TextInput
            style={[globalStyles.ProfileInput, {height: "15%", width: "45%"}]}
            textAlign="center"
            defaultValue={lastName}
            onChangeText={(lastName) => setLast(lastName)}
          />
        </View>
        <View style={[globalStyles.inputView, {height: "20%", marginTop: "-30%"}]}>
          <TextInput
            style={[globalStyles.ProfileInput, {height: "100%"}]}
            textAlign="center"
            defaultValue={phone}
            onChangeText={(phone) => setPhone(phone)}
          />
        </View>
        <View style={[globalStyles.inputView, {height: "20%", marginBottom: "30%"}]}>
          <TextInput
            style={[globalStyles.ProfileInput, {height: "100%"}]}
            textAlign="center"
            defaultValue={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        </ScrollView>
      </KeyboardAvoidingView>

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
