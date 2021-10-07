import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  Text, View, Image, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { globalStyles } from '../styles/global';
import logo from '../assets/logo.png'


export default function HomeScreen({navigation}) {
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
  
    let locText = 'Waiting..';
    if (errorMsg) {
      locText = errorMsg;
    } else if (location) {
      locText = JSON.stringify(location);
    }
  
    return (
      <View style={globalStyles.container}>
        <StatusBar style="auto" />
        <Image source={logo} style={globalStyles.logo } /> 
        <TouchableOpacity style={globalStyles.homeBtns} onPress={() => navigation.navigate('FindEvent')}>
          <Text style={globalStyles.loginText}>Find an Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.homeBtns} onPress={() => navigation.navigate('History')}>
          <Text style={globalStyles.loginText}>View History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.homeBtns} onPress={() => navigation.navigate('Profile')}>
          <Text style={globalStyles.loginText}>View my Profile</Text>
        </TouchableOpacity>

        <Text>{"\n\n"}This is your current location: 
        {"\n"} {locText}</Text>
      </View>
    );
  }