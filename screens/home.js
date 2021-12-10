import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import * as Location from "expo-location";
import { globalStyles } from "../styles/global";
import logo from "../assets/logo.png";
import { Icon } from "react-native-elements";

//Home Screen
export default function HomeScreen({ route, navigation }) {
  //Display Logo, Find Event and View History Buttons
  console.log(route.params);
  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <Image source={logo} style={globalStyles.logo} />
      {/* <Text>User id is {route.params}</Text> */}
      <TouchableOpacity
        style={globalStyles.homeBtns}
        onPress={() => navigation.navigate("Map", route.params)}
      >
        <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
          Find an Event
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.homeBtns}
        onPress={() => navigation.navigate("History", route.params)}
      >
        <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
          View History
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.homeBtns}
        onPress={() => navigation.navigate("Map", route.params)}
      >
        <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
          View Map
        </Text>
      </TouchableOpacity>

      {/*Navigation bar */}
      <View style={globalStyles.navigationBarHome}>
      <Icon 
        raised
        name = "person"
        onPress={() => navigation.navigate("Profile", route.params)}
        
      />
      <Icon
      raised 
      name= "home"
      type="ionicon"
      onPress={() => navigation.navigate("Home", route.params)}
      
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
