import { StatusBar } from "expo-status-bar";
import React, { Component, useState, useEffect } from "react";
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

/*
  Shows the user's past matches, ordered by date
*/
const CONTENT = [
  {
    title: "Oct 31 - Grand Rapids",
    content: (
      <View style={globalStyles.historyContainer}>
        <View style={{ marginVertical: "5%" }}>
          <Text style={globalStyles.historyText}>Laura Brown</Text>
          <Text style={globalStyles.historyText}>616-232-5245</Text>
        </View>
        <Text style={globalStyles.historyText}>Lucky</Text>
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
              <Text style={globalStyles.tagText}>Female</Text>
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
              <Text style={globalStyles.tagText}>2 years 3 months</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    ),
  },
  {
    title: "Oct 28 - Grand Rapids",
    content: (
    <View style={globalStyles.historyContainer}>
      <View style={{ marginVertical: "5%" }}>
        <Text style={globalStyles.historyText}>Robert Williams</Text>
        <Text style={globalStyles.historyText}>616-283-4782</Text>
      </View>
      <Text style={globalStyles.historyText}>Ollie</Text>
      <Image source={blankDogPFP} style={globalStyles.historyDog} />
      <View style={globalStyles.row}>
        <TouchableWithoutFeedback>
          <View style={globalStyles.historyTag}>
            <Text style={globalStyles.tagText}>Neutered</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={[globalStyles.historyTag, { marginLeft: 10 }]}>
            <Text style={globalStyles.tagText}>Medium</Text>
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
            <Text style={globalStyles.tagText}>4 years 5 months</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>)
  },
  {
    title: "Oct 26 - Grand Rapids",
    content: (
      <View style={globalStyles.historyContainer}>
        <View style={{ marginVertical: "5%" }}>
          <Text style={globalStyles.historyText}>Joe Smith</Text>
          <Text style={globalStyles.historyText}>616-222-5555</Text>
        </View>
        <Text style={globalStyles.historyText}>Milo</Text>
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
              <Text style={globalStyles.tagText}>Male</Text>
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

//View History page
export default function History({ route, navigation }) {
  
  //Declare Variables
  const userID = route.params;
  console.log(route.params);
  const [activeSections, setActiveSections] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [matchedDogIDs, setmatchedDogIDs] = useState([]);
  const [matchedDogs, setmatchedDogs] = useState([]);
  const screen = Dimensions.get("window");

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const getMatchedDogIDs = async () => {
    try {
      const response = await fetch(
        "https://canine-convention.herokuapp.com/events/" + userID
      );
      const json = await response.json();
      console.log(json);
      setmatchedDogIDs(json);
    } catch (error) {
      console.error(error);
    }
  };
  const getMatchedDogs = async () => {
    try {
      const response = await fetch(
        "https://canine-convention.herokuapp.com/events/" + userID
      );
      const json = await response.json();
      console.log(json);
      setmatchedDogIDs(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    //getMatchedDogIDs();
    //getMatchedDogs();
    //console.log(matchedDogIDs);
  }, []);

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
        <View style={[globalStyles.row, {justifyContent: "center"}]}>
          <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "500" }}>
            {section.title}{"       "}
          </Text>
          <Icon name="chevron-down" type="font-awesome-5" color={"#444"} size={18}/>
        </View>
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
  //Display History of past events
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
        {/* Navigation Bar */}
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
        onPress={() => navigation.navigate("HistoryHelp")} 
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
