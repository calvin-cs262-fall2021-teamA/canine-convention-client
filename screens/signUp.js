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

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <Image
        style={[globalStyles.logo, { marginTop: "10%" }]}
        source={require("../assets/logo.png")}
      />

      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        scrollEnabled={false}
      >
        <View style={globalStyles.inputView}>
          <TextInput
            style={globalStyles.TextInput}
            textAlign="center"
            placeholder="name"
            placeholderTextColor="#003f5c"
            onChangeText={(name) => setName(name)}
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
          onPress={() => navigation.navigate("Home")}
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
