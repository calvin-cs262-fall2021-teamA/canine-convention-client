import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Alert, ScrollView,SafeAreaView,
    StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../styles/global";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";

/*
* This displayes the help text for the Profile screen
*/


const CONTENT = [
    {
        title:  "To edit your dog's profile ",
        content: 
         <Text style={globalStyles.HelptText}>
        {"1. Tap on the 'Edit' button in the top right corner of the box containing the dog you want to edit." + "\n" +
         "2. That will take you to the 'DogProfileEdit' screen." + "\n" +
         "3. To change the profile picture of your dog:" + "\n" + "\t"+
         "3a. Tap on the “Choose a puppy profile picture!” button." + "\n" + "\t"+
         "3b. That will open your phone’s camera roll where you can select a photo." + "\n" + 
         "4. To change your dog’s birthday:" + "\n" + "\t" + 
         "4a. Tap on the “Select birthdate” button near the bottom of your screen." + "\n" + "\t" + 
         "4b. This will open a popup where you can scroll to select the approximate date your dog was born."+ "\n" + "\t" + 
         "4c. Press “ confirm” once the right date has been selected." + "\n" + 
         "5. Press the “Save” button in the upper right hand corner to save your changes." + "\n" +
         "6. To delete your dog press the 'Delete Dog' button in the top left corner of the screen\n\n"}
        </Text> 
    },

    {
        title: "To add a new dog to your profile",
        content: <Text style={globalStyles.HelptText}>
        {"1. Press the “Add a new dog” button on the last slide of your dogs." + "\n" + 
        "2. From that page you can enter all of your dog’s information by tapping on the corretly labed buttons." + "\n" + 
        "3. To add a profile picture for your dog:" + "\n" + "\t"+
        "3a. Tap on the “Choose a puppy profile picture!” button." + "\n" + "\t"+
        "3b. That will open your phone’s camera roll where you can select a photo." + "\n" +
        "4. To enter your dog’s birthday:" + "\n" + "\t" + 
        "4a.  Tap on the “Select birthdate” button near the bottom of your screen." + "\n" + "\t" + 
        "4b. This will open a popup where you can scroll to select the approximate date your dog was born."+ "\n" + "\t" + 
        "4c. Press “ confirm” once the right date has been selected." + "\n" + 
        "5. If you change your mind, press “Cancel” in the upper left corner to discard your changes."+ "\n" +
        "6. Press “Save” in the upper right hand corner to save your changes.\n\n"}
        </Text>
      },
];

export default function ProfileEditHelp({ route, navigation }) {
    const [activeSections, setActiveSections] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const screen = Dimensions.get("window");

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[
          { backgroundColor: "#F5FCFF", padding: "3%" },
          isActive ? styles.active : styles.inactive,
        ]}
        transition="backgroundColor"
      >
        <Text style={{ textAlign: "left", fontSize: 16, fontWeight: "500" }}>
          {section.title}
        </Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[
          { alignItems: "left", width: "100%" },
          isActive ? styles.active : styles.inactive,
        ]}
        transition="backgroundColor"
      >
        <Text style={{ textAlign: "left" , marginLeft: "5%", marginRight: "5%"}}>{section.content}</Text>
      </Animatable.View>
    );
  };
    return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[globalStyles.container, { paddingTop: "10%" }]}>
        <ScrollView>

          <Accordion
            style={{
              height: screen.height * 0.6,
              width: screen.width * 0.9,
              alignItems: "center",
            }}
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
        
        </ScrollView>
     </View>
</SafeAreaView>
  );
}
const styles = StyleSheet.create({
    active: {
      backgroundColor: "#F5FCFF",
    },
    inactive: {
      backgroundColor: "#EFF0F4",
    },
  });