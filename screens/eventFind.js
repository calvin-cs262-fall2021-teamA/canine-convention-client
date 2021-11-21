import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ButtonGroup, Icon } from "react-native-elements";
import { globalStyles } from "../styles/global";
import SelectDropdown from "react-native-select-dropdown";

export default function FindEvent({ route, navigation }) {
  const [eventType, setEventType] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [dogGender, setDogGender] = useState("");
  const [dogChar, setDogChar] = useState("");
  const [dogStatus, setDogStatus] = useState("");
  const dogNames = ["Fido", "Rover", "Snowball"];
  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <Text style={globalStyles.subtitle}>Find an event:</Text>

      <SelectDropdown
        buttonStyle={{
          backgroundColor: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#000000",
          marginVertical: "4%",
        }}
        data={dogNames}
        defaultButtonText="Choose Dog"
        onSelect={(selectedItem, index) => {
          //console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        renderDropdownIcon={() => {
          return (
            <Icon
              name="chevron-down"
              type="font-awesome-5"
              color={"#444"}
              size={18}
            />
          );
        }}
        dropdownIconPosition={"right"}
      />
      <ButtonGroup
        buttons={["WALK", "PARK"]}
        selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
        selectedIndex={eventType}
        containerStyle={{ marginBottom: "4%" }}
        onPress={(value) => {
          setEventType(value);
        }}
      />
      <Text style={{ textAlign: "center", fontSize: 20 }}>Filters:</Text>
      <ButtonGroup
        buttons={["SMALL", "MEDIUM", "LARGE"]}
        selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
        selectedIndex={dogSize}
        containerStyle={{ marginBottom: "4%" }}
        onPress={(value) => {
          setDogSize(value);
        }}
      />
      <ButtonGroup
        buttons={["MALE", "FEMALE"]}
        selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
        selectedIndex={dogGender}
        containerStyle={{ marginBottom: "4%" }}
        onPress={(value) => {
          setDogGender(value);
        }}
      />
      <ButtonGroup
        buttons={["CALM", "PLAYFUL", "FRIENDLY"]}
        selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
        selectedIndex={dogChar}
        containerStyle={{ marginBottom: "4%" }}
        onPress={(value) => {
          setDogChar(value);
        }}
      />
      <ButtonGroup
        containerStyle={{ marginTop: "4%" }}
        selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
        buttons={["NEUTERED", "NOT NEUTERED"]}
        selectedIndex={dogStatus}
        onPress={(value) => {
          setDogStatus(value);
        }}
      />
      <TouchableOpacity
        style={globalStyles.homeBtns}
        onPress={() => navigation.navigate("Match Found", route.params)}
      >
        <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
          FIND
        </Text>
      </TouchableOpacity>
      <View style={globalStyles.navigationBarEvent}>
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
