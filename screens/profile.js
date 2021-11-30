import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  FlatList,
} from "react-native";
import PagerView from "react-native-pager-view";
import { globalStyles } from "../styles/global";
import blankPFP from "../assets/blankPFP.png";
import blankDogPFP from "../assets/blankDogPFP.jpg";
import{Icon} from "react-native-elements";

export default function Profile({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [userID, setUserID] = useState(1);
  const [userInfo, setUserInfo] = useState(NULL);

  const getPersonInfo = async () => {
    try{
      const response = await fetch('https://canine-convention.herokuapp.com/person/' + str(userID))
      const json = await response.json();
      setUserInfo(json)
    } catch (error) {
      console.error(error);
    }finally {
      setLoading(false)
    }
  }

  useEffect (() => {
    getPersonInfo ();
  }, []);

  return (
    <View style={{ backgroundColor: "#EFF0F4" }}>
      <TouchableOpacity
        style={[globalStyles.editBtn, {height: "5%"}]}
        onPress={() => navigation.navigate("ProfileEdit", route.params)}
      >
        <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
          Edit
        </Text>
      </TouchableOpacity>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={userInfo}
            renderItem={({ item }) => (
              <View style={{ left: "5%" }}>
                <Text style={globalStyles.profileText}>{item.firstname} {item.lastname}</Text>
                <Text style={globalStyles.profileText}>{item.phone}</Text>
                <Text style={globalStyles.profileText}>{item.email}</Text>
              </View>
            )}
            />
        )}
      <Image source={blankPFP} style={globalStyles.picture} />

      <PagerView style={globalStyles.pager} initialPage={0}>
        <View style={globalStyles.container} key="1">
          <View style={globalStyles.row}>
            <Text style={globalStyles.dogName}>Fido</Text>
            <TouchableOpacity
              style={[
                globalStyles.editBtn,
                { marginLeft: "60%", marginTop: "5%", height: "60%"},
              ]}
              onPress={() => navigation.navigate("DogProfileEdit", {currentDog: "Fido", userID: route.params})}
            >
              <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
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
        <View style={globalStyles.container} key="2">
          <View style={globalStyles.row}>
            <Text style={globalStyles.dogName}>Rover</Text>
            <TouchableOpacity
              style={[
                globalStyles.editBtn,
                { marginLeft: "60%", marginTop: "5%" , height: "60%"},
              ]}
              onPress={() => navigation.navigate("DogProfileEdit", {currentDog: "Rover", userID: route.params})}
            >
              <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <Image source={blankDogPFP} style={globalStyles.pictureDog} />
          <View style={globalStyles.row}>
            <TouchableWithoutFeedback>
              <View style={globalStyles.tag}>
                <Text style={globalStyles.tagText}>Neutered</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={globalStyles.tag}>
                <Text style={globalStyles.tagText}>Medium</Text>
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
                <Text style={globalStyles.tagText}>Friendly</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={globalStyles.row}>
            <TouchableWithoutFeedback>
              <View style={globalStyles.tag}>
                <Text style={globalStyles.tagText}>4 year</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={globalStyles.container} key="3">
          <View style={globalStyles.row}>
            <Text style={globalStyles.dogName}>Snowball</Text>
            <TouchableOpacity
              style={[
                globalStyles.editBtn,
                { marginLeft: "60%", marginTop: "5%", height: "60%" },
              ]}
              onPress={() => navigation.navigate("DogProfileEdit", {currentDog: "Snowball", userID: route.params})}
            >
              <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <Image source={blankDogPFP} style={globalStyles.pictureDog} />
          <View style={globalStyles.row}>
            <TouchableWithoutFeedback>
              <View style={globalStyles.tag}>
                <Text style={globalStyles.tagText}>Neutered</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={globalStyles.tag}>
                <Text style={globalStyles.tagText}>Small</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={globalStyles.row}>
            <TouchableWithoutFeedback>
              <View style={globalStyles.tag}>
                <Text style={globalStyles.tagText}>Female</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={globalStyles.tag}>
                <Text style={globalStyles.tagText}>Playful</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={globalStyles.row}>
            <TouchableWithoutFeedback>
              <View style={globalStyles.tag}>
                <Text style={globalStyles.tagText}>1 year</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </PagerView>
    </View>
  );
}
