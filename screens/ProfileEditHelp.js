import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Alert, SafeAreaView, ScrollView,
    StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../styles/global";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";

/*
* This displayes the help text for the Profile Edit screen
*/
const CONTENT = [
    {
        title:  "To change your profile picture ",
        content: (<Text style={globalStyles.HelptText}>
            {"1. Tap on the ”Choose a profile picture!” button." + "\n"+ "\n" +
            "2. That will open your phone’s camera roll where you can select a new photo." + "\n" + "\n" +
            "3. Press the “Save” button in the upper right hand corner to save your changes.\n\n" }
        </Text> ),
    },

    {
        title: "To change your personal information",
        content: <Text style={globalStyles.HelptText}>
            {"1. Tap in the text box that contains the outdated information." + "\n" + "\n" +
            "2. Type in the new information." + "\n" + "\n" +
            "3. Press “Save” in the upper right hand corner to save your changes.\n" }
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
        <Text style={{ textAlign: "left" , marginLeft: "5%"}}>{section.content}</Text>
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