import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [phone, setPhone] = useState("");
  //const [id, setID] = useState("hi");

  const makeUser = async () => {
    try{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "phone": phone
        })
      };
      const response = await fetch("http://canine-convention.herokuapp.com/persons", requestOptions);
      const json = await response.json();
      console.log(json);
      return json;
    }catch(error) {console.error(error)}
  };

  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, flexDirection: "column", justifyContent: "center", backgroundColor: "#EFF0F4" }}
    >
      <Image
        style={globalStyles.logo}
        source={require("../assets/logo.png")}
      />

      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        scrollEnabled={true}
      >
        <View style={globalStyles.inputView, globalStyles.row}>
          <TextInput
            style={[globalStyles.TextInput, {height: "100%", width: "45%"}]}
            textAlign="center"
            placeholder="first name"
            placeholderTextColor="#003f5c"
            onChangeText={(firstName) => setFirst(firstName)}
          />
          <TextInput
            style={[globalStyles.TextInput, {height: "100%", width: "45%"}]}
            textAlign="center"
            placeholder="last name"
            placeholderTextColor="#003f5c"
            onChangeText={(lastName) => setLast(lastName)}
          />
        </View>
        <View style={[globalStyles.inputView, {marginTop: "4%"}]}>
          <TextInput
            style={globalStyles.TextInput}
            textAlign="center"
            placeholder="phone number"
            placeholderTextColor="#003f5c"
            onChangeText={(phone) => setPhone(phone)}
          />
        </View>
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
        <TouchableOpacity
          style={globalStyles.loginBtn}
          //onPressIn={() => makeUser()}
          onPress={() => makeUser().then(val => navigation.navigate("Home", val.id))}
          //onPress={() => makeUser().then(val => navigation.navigate("DogProfileEdit", {currentDog: "New dog", userID: val.id}))}
        >
          <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
            {" "}
            SIGN UP{" "}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
