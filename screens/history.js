import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { globalStyles } from "../styles/global";
import blankDogPFP from "../assets/blankDogPFP.jpg";
import{Icon} from "react-native-elements";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";

const CONTENT = [
  {
    title: "Oct 31 - Grand Rapids",
    content: (
      <View style={globalStyles.historyContainer}>
        <View style={{ marginVertical: "5%" }}>
          <Text style={globalStyles.historyText}>John Doe</Text>
          <Text style={globalStyles.historyText}>616-222-5555</Text>
        </View>
        <Text style={globalStyles.historyText}>Fido</Text>
        <Image source={blankDogPFP} style={globalStyles.historyDog} />
        <View style={globalStyles.row}>
          <TouchableWithoutFeedback>
            <View style={globalStyles.historyTag}>
              <Text style={globalStyles.tagText}>Neutered</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={[globalStyles.historyTag, { marginLeft: 10 }]}>
              <Text style={globalStyles.tagText}>Large</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={globalStyles.row}>
          <TouchableWithoutFeedback>
            <View style={globalStyles.historyTag}>
              <Text style={globalStyles.tagText}>Male</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={[globalStyles.historyTag, { marginLeft: 10 }]}>
              <Text style={globalStyles.tagText}>Calm</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={globalStyles.row}>
          <TouchableWithoutFeedback>
            <View style={globalStyles.historyTag}>
              <Text style={globalStyles.tagText}>2 years</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    ),
  },
  {
    title: "Oct 28 - Grand Rapids",
    content: "Event 2 info",
  },
  {
    title: "Oct 26 - Grand Rapids",
    content: (
      <View style={globalStyles.historyContainer}>
        <View style={{ marginVertical: "5%" }}>
          <Text style={globalStyles.historyText}>John Doe</Text>
          <Text style={globalStyles.historyText}>616-222-5555</Text>
        </View>
        <Text style={globalStyles.historyText}>Snowball</Text>
        <Image source={blankDogPFP} style={globalStyles.historyDog} />
        <View style={globalStyles.row}>
          <TouchableWithoutFeedback>
            <View style={globalStyles.historyTag}>
              <Text style={globalStyles.tagText}>Neutered</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={[globalStyles.historyTag, { marginLeft: 10 }]}>
              <Text style={globalStyles.tagText}>Small</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={globalStyles.row}>
          <TouchableWithoutFeedback>
            <View style={globalStyles.historyTag}>
              <Text style={globalStyles.tagText}>Female</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={[globalStyles.historyTag, { marginLeft: 10 }]}>
              <Text style={globalStyles.tagText}>Playful</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={globalStyles.row}>
          <TouchableWithoutFeedback>
            <View style={globalStyles.historyTag}>
              <Text style={globalStyles.tagText}>1 year</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    ),
  },
];

export default function History({ route, navigation }) {
  const {userID} = route.params;
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
        <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "500" }}>
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
          { alignItems: "center", width: "100%" },
          isActive ? styles.active : styles.inactive,
        ]}
        transition="backgroundColor"
      >
        <Text style={{ textAlign: "center" }}>{section.content}</Text>
      </Animatable.View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[globalStyles.container, { paddingTop: "10%" }]}>
        <ScrollView>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "300",
              marginBottom: "5%",
            }}
          >
            History of Events
          </Text>

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
          <View style={globalStyles.navigationBarHistory}>
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
