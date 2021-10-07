import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  Text, View } from 'react-native';
import * as Location from 'expo-location';
import { globalStyles } from '../styles/global';


export default function HomeScreen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  
    return (
      <View style={globalStyles.container}>
        <StatusBar style="auto" />
        <Text>Welcome to Canine Convention! {"\n"} 
        This is your current location: 
        {"\n"} {text}</Text>
      </View>
    );
  }