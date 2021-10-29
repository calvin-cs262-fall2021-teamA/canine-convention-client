import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from '../styles/global';
 
export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
 
  return (
    <View style={globalStyles.container}>
      <Image style={globalStyles.image} source={require("../assets/logo.png")} />
 
      <StatusBar style="auto" />
      <View style={globalStyles.inputView}>
        <TextInput
          style={globalStyles.TextInput}
          placeholder="name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={globalStyles.inputView}>
        <TextInput
          style={globalStyles.TextInput}
          placeholder="email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={globalStyles.inputView}>
        <TextInput
          style={globalStyles.TextInput}
          placeholder="password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={globalStyles.loginBtn} onPress={() => navigation.navigate('Home-GPS')}>
        <Text style={globalStyles.loginText,globalStyles.homeButtonsText}> SIGN UP </Text>
      </TouchableOpacity>
    </View>
  );
}
