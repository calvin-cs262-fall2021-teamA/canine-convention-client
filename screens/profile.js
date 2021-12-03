import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import PagerView from "react-native-pager-view";
import { globalStyles } from "../styles/global";
import blankPFP from "../assets/blankPFP.png";
import blankDogPFP from "../assets/blankDogPFP.jpg";

//Profile Screen
export default function Profile({ route, navigation }) {
  //declare variables
  const [isLoading, setLoading] = useState(true);
  const [userID, setUserID] = useState(1);
  const [userInfo, setUserInfo] = useState([]);
  const [dogInfo, setDogInfo] = useState([]);

  //Get user data from the Database
  const getPersonInfo = async () => {
    try {
      const response = await fetch(
        "https://canine-convention.herokuapp.com/person/" + userID
      );
      const json = await response.json();
      setUserInfo(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  //Get Dog info from the DataBase
  const getDogInfo = async () => {
    try {
      const response = await fetch(
        "https://canine-convention.herokuapp.com/person/" + userID + "/dogs"
      );
      const json = await response.json();
      setDogInfo(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPersonInfo();
    getDogInfo();
  }, []);

  //Display User and Dog Data, Buttons for Editing Dog and Person.
  return (
    <View style={{ backgroundColor: "#EFF0F4" }}>
      {/* profile edit button */}
      <TouchableOpacity
        style={[globalStyles.editBtn, { height: "5%" }]}
        onPress={() => navigation.navigate("ProfileEdit", route.params)}
      >
        <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
          Edit
        </Text>
      </TouchableOpacity>
      {isLoading ? <ActivityIndicator/> : (
        <View style={{ left: "5%" }}>
          <Text style={globalStyles.profileText}>
            {userInfo.firstname} {userInfo.lastname}
          </Text>
          <Text style={globalStyles.profileText}>{userInfo.phone}</Text>
          <Text style={globalStyles.profileText}>{userInfo.email}</Text>
        </View>
      )}
      <Image source={blankPFP} style={globalStyles.picture} />

      {isLoading ? <ActivityIndicator/> : (
          <PagerView style={globalStyles.pager} initialPage={0}>
            {/* {output} */}
            {dogInfo.map((item)=> {return (
            <View style={globalStyles.container} key={item.id}>
              <View style={globalStyles.row}>
                <Text style={globalStyles.dogName}>{item.dogname}</Text>
                {/* dog edit button */}
                <TouchableOpacity
                  style={[
                    globalStyles.editBtn,
                    { marginLeft: "60%", marginTop: "5%", height: "60%"},
                  ]}
                  onPress={() => navigation.navigate("DogProfileEdit", {currentDog: item, userID: route.params})}
                >
                  <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Display Dog Info */}
              <Image source={blankDogPFP} style={globalStyles.pictureDog} />
              <View style={globalStyles.row}>
                <TouchableWithoutFeedback>
                  <View style={globalStyles.tag}>
                    {item.neutered &&
                    <Text style={globalStyles.tagText}>Neutered</Text>}
                    {!(item.neutered) &&
                    <Text style={globalStyles.tagText}>Not Neutered</Text>}
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <View style={globalStyles.tag}>
                    <Text style={globalStyles.tagText}>{item.size}</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View style={globalStyles.row}>
                <TouchableWithoutFeedback>
                  <View style={globalStyles.tag}>
                    <Text style={globalStyles.tagText}>{item.gender}</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <View style={globalStyles.tag}>
                    <Text style={globalStyles.tagText}>{item.personality}</Text>
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
            );})}
        </PagerView>
      )}
    </View>
  );
}
