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
import { Icon } from "react-native-elements";

export default function Profile({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [userID, setUserID] = useState(1);
  const [userInfo, setUserInfo] = useState(null);
  const [dogInfo, setDogInfo] = useState(null);

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
      getDogInfo();
    }
  };

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

  return (
    <View style={{ backgroundColor: "#EFF0F4" }}>
      <TouchableOpacity
        style={[globalStyles.editBtn, { height: "5%" }]}
        onPress={() => navigation.navigate("ProfileEdit", route.params)}
      >
        <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
          Edit
        </Text>
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{ left: "5%" }}>
          <Text style={globalStyles.profileText}>
            {userInfo.firstname} {userInfo.lastname}
          </Text>
          <Text style={globalStyles.profileText}>{userInfo.phone}</Text>
          <Text style={globalStyles.profileText}>{userInfo.email}</Text>
        </View>
      )}
      <Image source={blankPFP} style={globalStyles.picture} />

      {isLoading ? (
        <ActivityIndicator />
      ) : (
          <FlatList
            data={dogInfo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }, id) => (
              <View style={globalStyles.container}>
                <View style={globalStyles.row}>
                  <Text style={globalStyles.dogName}>{item.dogName}</Text>
                  <TouchableOpacity
                    style={[
                      globalStyles.editBtn,
                      { marginLeft: "60%", marginTop: "5%", height: "60%" },
                    ]}
                    onPress={() =>
                      navigation.navigate("DogProfileEdit", {
                        currentDog: "Fido",
                        userID: route.params,
                      })
                    }
                  >
                    <Text
                      style={(globalStyles.loginText, globalStyles.ButtonsText)}
                    >
                      Edit
                    </Text>
                  </TouchableOpacity>
                </View>
                <Image source={blankDogPFP} style={globalStyles.pictureDog} />
                <View style={globalStyles.row}>
                  <TouchableWithoutFeedback>
                    <View style={globalStyles.tag}>
                      <Text style={globalStyles.tagText}>
                        {item.Neutered ? "Neutered" : "Not Neutered"}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback>
                    <View style={globalStyles.tag}>
                      <Text style={globalStyles.tagText}>{item.Size}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
                <View style={globalStyles.row}>
                  <TouchableWithoutFeedback>
                    <View style={globalStyles.tag}>
                      <Text style={globalStyles.tagText}>{item.Gender}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback>
                    <View style={globalStyles.tag}>
                      <Text style={globalStyles.tagText}>
                        {item.Personality}
                      </Text>
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
            )}
          />
      )}
    </View>
  );
}
