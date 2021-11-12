import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';
import { globalStyles } from '../styles/global';
import logo from '../assets/logo.png'


export default function HomeScreen({navigation}) {
    const [response, setLocation] = useState(null);
    //const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      //CheckIfLocationEnabled();
      GetCurrentLocation();
    }, []);

      const GetCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          Alert.alert(
            'Permission not granted', 'Allow the app to use location service.',
            [{text: 'OK' }],
            { cancelable: false }
          );
        }
        let {coords} = await Location.getCurrentPositionAsync({});
        if (coords) {
          const { latitude, longitude, } = coords;
          let response = await Location.reverseGeocodeAsync({ latitude, longitude, });
          setLocation(response);
          }
      }

    let addressText = "";
    if (response){
      for (let item of response){
        let name = item.name;
        let city = item.city;
        let region = item.region;
        addressText = JSON.stringify(name + " " + city + ", " + region);
      }
    }

    return (
      <View style={globalStyles.container}>
        <StatusBar style="auto" />
        <Image source={logo} style={globalStyles.logo}/>
        <TouchableOpacity style={globalStyles.homeBtns} onPress={() => 
            navigation.navigate('Profile')}>
          <Text style={globalStyles.loginText, globalStyles.ButtonsText}>View my Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.homeBtns} onPress={() => navigation.navigate('FindEvent')}>
          <Text style={globalStyles.loginText, globalStyles.ButtonsText}>Find an Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.homeBtns} onPress={() => navigation.navigate('History')}>
          <Text style={globalStyles.loginText, globalStyles.ButtonsText}>View History</Text>
        </TouchableOpacity>
       <TouchableOpacity style={globalStyles.homeBtns} onPress={() => 
            navigation.navigate('Map')}>
          <Text style={globalStyles.loginText, globalStyles.ButtonsText}>View Map</Text>
       </TouchableOpacity>

        <Text>{"\n\n"} This is your current location: 
        {"\n"}{addressText}</Text>
       </View> 
    );
  }