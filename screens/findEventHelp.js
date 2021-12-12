import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Alert, ScrollView,SafeAreaView,
    StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../styles/global";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";

/*
* This displayes the help text for the Find an Event screen
*/

const CONTENT = [
    {
        title:  "To join an event ",
        content: 
         <Text style={globalStyles.HelptText}>
        {"1. Swipe up on the white bar at the bottom of the screen" + "\n"+ "\n" +
        "2. Tap on the box that says 'Choose Dog' and select the dog would like to take" + "\n" + "\n" +
        "3. Select the qualities that you want the other dog to have by taping the appropriately labeled buttons" + "\n" + "\n" +
        "4. Tap the teal 'FIND' button" + "\n" + "\n" +
        "5. A 'Events found' screen will pop up with the location of the event and who created it in your area" + "\n" + "\n" +
        "6. Tap on the event you wish to go to " + "\n" + "\n" + 
        "7. This will take you to screen with contact infromation of the event creator and their dog" + "\n" + "\n"+
        "8. Accept or decline the match" + "\n" + "\n"+  "\t" +
        "8a. Press the button labeled 'Accept' to join the event and have it recorded on your history page" + "\n" + "\n" + "\t" +
        "8b. Press the button labeled 'Delete' if you would not like to go to the event"}                                                                                                                                                                                                               "
        </Text> 
    },

    {
        title: "To create an event",
        content:
        <Text style={globalStyles.HelptText}>
        {"1. Swipe up on the white bar at the bottom of the screen" + "\n"+ "\n" +
        "2. Tap on the box that says 'Choose Dog' and select the dog would like to take" + "\n" + "\n" +
        "3. Select the qualities that you want the other dog to have by taping the appropriately labeled buttons" + "\n" + "\n" +
        "4. Tap the teal 'FIND' button" + "\n" + "\n" + 
        "5. Tap the text that says 'want a different event? Create it here!'"+ "\n" + "\n" +
        "6. Use the drop down menu to select which dog you would like to take" + "\n" + "\n" +
        "7. Select the qualities that you want the other dog to have by taping the appropriately labeled buttons" + "\n" + "\n" + 
        "8. Tap the text that says 'Create' when you are done and the event will be made"}
        </Text>
    },

];

export default function findEventHelp ({ route, navigation }) {
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
              height: screen.height * 0.9,
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
