import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import logo from "../assets/logo.png";

//The Default Screen when you start the app 
export default function StartScreen({ navigation }) {
  return (
    //Displays Title, logo, Login and Signup buttons
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Canine Convention</Text>
      <Image source={logo} style={globalStyles.logo} />
      <TouchableOpacity
        style={globalStyles.startBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={({ fontSize: 15 }, globalStyles.ButtonsText)}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.startBtn}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={({ fontSize: 15 }, globalStyles.ButtonsText)}>
          SIGN UP
        </Text>
      </TouchableOpacity>
    </View>
  );
}
