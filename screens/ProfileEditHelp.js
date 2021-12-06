import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../styles/global";

export default function ProfileEditHelp({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={{fontWeight: "bold", marginLeft: "-35%", marginTop: "-100%"}}>
            To change your profile picture:
            </Text>
            
            <Text style={globalStyles.HelptText}>
                {"1. Tap on the ”Choose a profile picture!” button." + "\n"+
                "2. That will open your phone’s camera roll where you can select a new photo." + "\n" +
                "3. Press the “Save” button in the upper right hand corner to save your changes." }
            </Text>
        
            <Text style={{fontWeight: "bold", marginLeft: "-25%"}}>
                To change your personal information:
            </Text>

            <Text style={globalStyles.HelptText}>
                {"1. Tap in the text box that contains the outdated information." + "\n" +
                "2. Type in the new information." + "\n" +
                "3. Press “Save” in the upper right hand corner to save your changes." }
            </Text>
            
           
            
        </View>
    );

}