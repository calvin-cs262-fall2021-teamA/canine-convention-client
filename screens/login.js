import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { globalStyles } from "../styles/global";

/*
  Allows the user to login to a previously created account
*/

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Checks if the user has an account
  const checkUser = async () => {
    try {
      const response = await fetch(
        "https://canine-convention.herokuapp.com/login/" + email
      );
      const json = await response.json();
      //console.log(json);
      return json
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <Image style={globalStyles.logo} source={require("../assets/logo.png")} />

      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        scrollEnabled={false}
      >
        {/* email input */}
        <View style={globalStyles.inputView}>
          <TextInput
            style={globalStyles.TextInput}
            textAlign="center"
            placeholder="email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        {/* passsword input */}
        <View style={globalStyles.inputView}>
          <TextInput
            style={globalStyles.TextInput}
            textAlign="center"
            placeholder="password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={globalStyles.forgot_button}>Don't have an account?</Text>
        </TouchableOpacity>
        {/* 
        <TouchableOpacity>
          <Text style={globalStyles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity> */}

        {/*Login button */}
        <TouchableOpacity
          style={globalStyles.loginBtn}
          //onPress={() => checkUser()}
          onPress={() => checkUser().then(val => navigation.navigate("Home", val.id))}
        >
          <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
