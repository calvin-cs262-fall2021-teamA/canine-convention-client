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
 
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={globalStyles.container}>
      <Image style={globalStyles.image} source={require("../assets/logo.png")} />
 
      <StatusBar style="auto" />
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

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={globalStyles.forgot_button}>Don't have an account?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={globalStyles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={globalStyles.loginBtn} onPress={() => navigation.navigate('Home')}>
        <Text style={globalStyles.loginText, globalStyles.ButtonsText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
