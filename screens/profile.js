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
import Dots from 'react-native-dots-pagination';
import{Icon} from "react-native-elements";

/*
  Shows the user's info and their dog's info. 
*/

export default function Profile({ route, navigation }) {
  //declare variables
  const userID = route.params;
  const [isLoading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [dogInfo, setDogInfo] = useState([]);

  //Get user data from the Database
  const getPersonInfo = async () => {
    try {
      const response = await fetch(
        "https://canine-convention.herokuapp.com/person/" + userID
      );
      const json = await response.json();
      //console.log(json);
      setUserInfo(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  //Get Dog info from the Database
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

  //Calculates age in months and years from a date and creates appropriate text to display the age
  const getAge = (birthdate) =>{
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    if(today.getMonth() >= birthDate.getMonth()){
      var m = today.getMonth() - birthDate.getMonth();
    }else{
      age = age - 1;
      var m = (today.getMonth() + 12) - birthDate.getMonth();
    }
    if(age == 1){
      if(m == 1){
        return age.toString() + " year " + m.toString() + " month";
      }else{
        return age.toString() + " year " + m.toString() + " months";
      }
    }else if(age == 0){
      if(m == 1){
        return m.toString() + " month";
      }else{
        return m.toString() + " months";
      }
    }else{
      if(m == 1){
        return age.toString() + " years " + m.toString() + " month";
      }else{
        return age.toString() + " years " + m.toString() + " months";
      }
    }
  }

  const [activeDot, setActiveDot] = useState(0);
  const changeIndicator = (pageNum) =>{
    setActiveDot(parseInt(pageNum.nativeEvent.position));
  }


  //Display User and Dog Data, Buttons for Editing Dog and Person.
  return (
    <View style={{ backgroundColor: "#EFF0F4" }}>
      {/* profile edit button */}
      <TouchableOpacity
        style={[globalStyles.editBtn, { height: "5%" }]}
        onPress={() => navigation.push("ProfileEdit", {currentUser: userInfo, userID: userID})}
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
      {userInfo.image == null &&
      <Image source={blankPFP} style={globalStyles.picture} />}
      {userInfo.image != null &&
      <Image source={{uri: userInfo.image}} style={globalStyles.picture} />}

      {isLoading ? <ActivityIndicator/> : (
          <PagerView style={globalStyles.pager} initialPage={0} onPageSelected={e => {changeIndicator(e)}}>
            {dogInfo.map((item)=> {return (
            <View style={globalStyles.container} key={item.id}>
              <View style={[globalStyles.row, {minHeight: "7%"}]}>
                <Text style={globalStyles.dogName}>{item.dogname}</Text>
                {/* dog edit button */}
                <TouchableOpacity
                  style={[
                    globalStyles.editBtn,
                    { marginLeft: "60%", marginTop: "5%", height: "60%"},
                  ]}
                  onPress={() => navigation.push("DogProfileEdit", {currentDog: item, userID: userID})}
                >
                  <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Display Dog Info */}
              
              <Image source={{uri: item.image}} style={globalStyles.pictureDog} />
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
              <View style={[globalStyles.row, {marginBottom: "-3%"}]}>
                <TouchableWithoutFeedback>
                  <View style={[globalStyles.tag, {width: '40%'}]}>
                    <Text style={globalStyles.tagText}>{getAge(item.birthdate)}</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View style={[globalStyles.row, {minHeight: "0.5%", marginBottom: "-4%"}]}>
                <Dots length={dogInfo.length + 1} active={activeDot} activeColor="#16BAC6"/>
              </View>
              
            </View>
            );})}
            <View style={globalStyles.container} key={dogInfo.length + 1}>
              <TouchableOpacity
                style={{    
                  width: "50%",
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#195F6B",
                  minHeight: "20%",}}
                onPress={() => navigation.push("AddDog", route.params)}>
                <Text style={{color: "#FFFFFF", fontSize: 18}}>Add a new dog</Text>
              </TouchableOpacity>
              <View style={{height:"20%", marginBottom:"-40%", marginTop: "20%"}}>
                <Dots style={{height:"20%"}} length={dogInfo.length + 1} active={activeDot} activeColor="#16BAC6"/>
              </View>
            </View>
        </PagerView>
      )}
      <View style={globalStyles.navigationBarProfile}>
      <Icon 
        raised
        name = "person"
        disabled= "true"
        onPress={() => navigation.navigate("Profile", userID)}  
      />
      <Icon
      raised 
      name= "home"
      type="ionicon"
      onPress={() => navigation.navigate("Home", userID)}
      
      />
      <Icon
        raised
        name= "log-out"
        type="ionicon"
        onPress={() => navigation.navigate("Start")} 
      />
       <Icon
        raised
        name= "help-outline"
        type="ionicon"
        onPress={() => navigation.navigate("ProfileHelp")} 
      />
      </View>
    </View>
    
  );
}
