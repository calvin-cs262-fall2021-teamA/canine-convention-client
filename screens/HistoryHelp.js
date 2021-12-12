import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../styles/global";

/*
* This displayes the help text for the History screen
*/
export default function HistoryHelp({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.HelptText, {marginTop: "-125%", marginLeft:"5%"}}>
                {"1. To view a past event, scroll to the date you want to view and tap on it." + "\n" +
                "2.To close the event, tap on the date again."}
            </Text>
        </View>

    );
 }