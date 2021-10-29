import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { ButtonGroup } from 'react-native-elements';
import { globalStyles } from '../styles/global';
 
export default function FindEvent({ navigation }) {
  const [eventType, setEventType] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [dogGender, setDogGender] = useState("");
  const [dogChar, setDogChar] = useState("");
 
  return (
    <View style={globalStyles.container}>
      
      <StatusBar style="auto" />
      <Text style={globalStyles.title}>Find an event:</Text>
      <ButtonGroup
        buttons={['WALK', 'PARK']}
        selectedIndex={eventType}
        containerStyle={{ marginBottom: 20 }}
        onPress={(value) => {
            setEventType(value);}
          }
        />
      <Text style={{ textAlign: 'center' }}>Tags:</Text>
      <ButtonGroup
        buttons={['SMALL', 'MEDIUM', 'LARGE']}
        selectedIndex={dogSize}
        containerStyle={{ marginBottom: 20 }}
        onPress={(value) => {
            setDogSize(value);}
          }
        />  
      <ButtonGroup
        buttons={['MALE', 'FEMALE']}
        selectedIndex={dogGender}
        containerStyle={{ marginBottom: 20 }}
        onPress={(value) => {
            setDogGender(value);}
          }
        />
      <ButtonGroup
        buttons={['CALM', 'PLAYFUL', 'FRIENDLY']}
        selectedIndex={dogChar}
        containerStyle={{ marginBottom: 20 }}
        onPress={(value) => {
            setDogChar(value);}
          }
        />
      <TouchableOpacity style={globalStyles.loginBtn} onPress={() => navigation.navigate('Home-GPS')}>
        <Text style={globalStyles.loginText}>FIND</Text>
      </TouchableOpacity>
    </View>
  );
}
