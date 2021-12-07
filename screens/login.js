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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkUser = async () => {
    try{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "email": email,
          "password": password,
        })
      };
      const response = await fetch("http://canine-convention.herokuapp.com/login", requestOptions);
      const json = await response.text();
      console.log(json);
      return json;
    }catch(error) {console.error(error)}
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
        <View style={globalStyles.inputView}>
          <TextInput
            style={globalStyles.TextInput}
            textAlign="center"
            placeholder="email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

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
        <TouchableOpacity>
          <Text style={globalStyles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.loginBtn}
          onPress={() => checkUser()}
        >
          <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
