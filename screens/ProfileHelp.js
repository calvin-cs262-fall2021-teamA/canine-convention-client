import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";

export default function ProfileEditHelp({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <ScrollView>
            <Text style={{fontWeight: "bold", marginLeft: "5%"}}>
            {"\n"}To edit your dog's profile:{"\n"}
            </Text>
            <Text style={globalStyles.HelptText}>
            {"1. Tap on the 'Edit' button in the top right corner of the box containing the dog you want to edit." + "\n" +
             "2. That will take you to the 'DogProfileEdit' screen." + "\n" +
             "3. To change the profile picture of your dog:" + "\n" + "\t"+
             "3a. Tap on the “Choose a puppy profile picture!” button." + "\n" + "\t"+
             "3b. That will open your phone’s camera roll where you can select a photo." + "\n" + 
             "4. To change your dog’s birthday:" + "\n" + "\t" + 
             "4a. Tap on the “Select birthdate” button near the bottom of your screen." + "\n" + "\t" + 
             "4b. This will open a popup where you can scroll to select the approximate date your dog was born."+ "\n" + "\t" + 
             "4c. Press “ confirm” once the right date has been selected." + "\n" + 
             "5. Press the “Save” button in the upper right hand corner to save your changes." + "\n" +
             "6. To delet your dog press the 'Delete Dog' button in the top left corner of the screen\n\n"}
            
            </Text>

            
            <Text style={{fontWeight: "bold", marginLeft: "5%"}}>
            To add a new dog to your profile:{"\n"}
            </Text>

            <Text style={globalStyles.HelptText}>
            {"1. Press the “Add a new dog” button on the last slide of your dogs." + "\n" + 
            "2. From that page you can enter all of your dog’s information by tapping on the corretly labed buttons." + "\n" + 
            "3. To add a profile picture for your dog:" + "\n" + "\t"+
            "3a. Tap on the “Choose a puppy profile picture!” button." + "\n" + "\t"+
            "3b. That will open your phone’s camera roll where you can select a photo." + "\n" +
            "4. To enter your dog’s birthday:" + "\n" + "\t" + 
            "4a.  Tap on the “Select birthdate” button near the bottom of your screen." + "\n" + "\t" + 
            "4b. This will open a popup where you can scroll to select the approximate date your dog was born."+ "\n" + "\t" + 
            "4c. Press “ confirm” once the right date has been selected." + "\n" + 
            "5. If you change your mind, press “Cancel” in the upper left corner to discard your changes."+ "\n" +
            "6. Press “Save” in the upper right hand corner to save your changes.\n\n"}
            </Text>
            </ScrollView>
        </View>
    );
}