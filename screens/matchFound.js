import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import PagerView from "react-native-pager-view";
import { globalStyles } from "../styles/global";
import blankDogPFP from "../assets/blankDogPFP.jpg";
import blankPFP from "../assets/blankPFP.png";

export default function FindSuccess({ route, navigation }) {
  // Join event
  const joinEvent = async (dogID, eventID) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "dogID": dogID,
          "activityID": eventID,
        })
      };
      const response = await fetch('https://canine-convention.herokuapp.com/event/join/' + eventID, requestOptions);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={{ backgroundColor: "#EFF0F4" }}>
      <View style={{ marginTop: "2%", marginLeft: "5%" }}>
        <Text style={globalStyles.subtitle}>Match found:</Text>
        <Text style={globalStyles.profileText}>{route.params[1].firstname} {route.params[1].lastname}</Text>
        <Text style={globalStyles.profileText}>616-222-5555</Text>
      </View>
      <Image source={blankPFP} style={globalStyles.picture} />

      <PagerView style={globalStyles.pager} initialPage={0}>
        <View style={globalStyles.container} key="1" collapsable="false">
          <Text style={globalStyles.dogName}>Fido</Text>
          <Image source={blankDogPFP} style={globalStyles.pictureDog} />
          <View style={globalStyles.row}>
            <TouchableWithoutFeedback>
              <View style={globalStyles.tag}>
                <Text style={globalStyles.tagText}>Neutered</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={globalStyles.tag}>
                <Text style={globalStyles.tagText}>Large</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={globalStyles.row}>
            <TouchableWithoutFeedback>
              <View style={globalStyles.tag}>
                <Text style={globalStyles.tagText}>Male</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={globalStyles.tag}>
                <Text style={globalStyles.tagText}>Calm</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={globalStyles.row}>
            <TouchableWithoutFeedback>
              <View style={globalStyles.tag}>
                <Text style={globalStyles.tagText}>2 years</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </PagerView>
      <View style={globalStyles.row}>
        <TouchableOpacity
          style={globalStyles.acceptBtns}
          onPress={() => { console.log(route.params[2]);joinEvent(route.params[2].id, route.params[1].id); navigation.navigate("Home", route.params[0]) }}
        >
          <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
            Accept
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.acceptBtns}
          onPress={() => navigation.navigate("Home", route.params[0])}
        >
          <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
            Decline
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
