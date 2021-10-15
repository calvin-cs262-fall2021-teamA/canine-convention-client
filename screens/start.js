import React from "react";
import {Text,View,Image,TouchableOpacity} from "react-native";
import { globalStyles } from '../styles/global';
import logo from '../assets/logo.png'

export default function StartScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>
          <Text style={globalStyles.title}>Canine Convention</Text>
          <Image source={logo} style={globalStyles.logo } /> 
          <TouchableOpacity style={globalStyles.loginBtn} onPress={() => navigation.navigate('Login')}>
              <Text style={{fontSize: 15}}>LOGIN</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={globalStyles.loginBtn}onPress={() => navigation.navigate('SignUp')}>
              <Text style={{fontSize: 15}}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      );
}