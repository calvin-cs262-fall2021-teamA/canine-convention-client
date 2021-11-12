import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import PagerView from 'react-native-pager-view';
import { globalStyles } from '../styles/global';
import blankPFP from '../assets/blankPFP.png'
import * as Location from 'expo-location';
import blankDogPFP from '../assets/blankDogPFP.jpg'


export default function Profile({navigation}){
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

    return(
        <View style={{backgroundColor: '#EFF0F4'}}>
            <TouchableOpacity style={globalStyles.editBtn} onPress={() => navigation.navigate('ProfileEdit')}>
                <Text style={globalStyles.loginText,globalStyles.ButtonsText}>Edit</Text>
            </TouchableOpacity>
            <View style={{left: '5%'}}>
                <Text style={globalStyles.profileText}>John Doe</Text>
                <Text style={globalStyles.profileText}>616-222-5555</Text>
                <Text style={globalStyles.profileText}>Grand Rapids{"\n"}</Text>
            </View>
            <Image source={blankPFP} style={globalStyles.picture}/>
            
            <PagerView style={globalStyles.pager} initialPage={0}>
                <View style={globalStyles.container} key="1">
                    <View style={globalStyles.row}>
                        <Text style={globalStyles.dogName}>Fido</Text>
                        <TouchableOpacity style={[globalStyles.editBtn, {marginLeft: '60%', marginTop: '5%'}]} 
                            onPress={() => navigation.navigate('DogProfileEdit', "Fido")}>
                            <Text style={globalStyles.loginText, globalStyles.ButtonsText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={blankDogPFP} style={globalStyles.pictureDog}/>
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
                        <TouchableOpacity style={[globalStyles.editBtn, {marginLeft: '60%', marginTop: '5%'}]} 
                            onPress={() => navigation.navigate('DogProfileEdit', "Rover")}>
                            <Text style={globalStyles.loginText, globalStyles.ButtonsText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={blankDogPFP} style={globalStyles.pictureDog}/>
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
                        <TouchableOpacity style={[globalStyles.editBtn, {marginLeft: '60%', marginTop: '5%'}]} 
                            onPress={() => navigation.navigate('DogProfileEdit', "Snowball")}>
                            <Text style={globalStyles.loginText, globalStyles.ButtonsText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={blankDogPFP} style={globalStyles.pictureDog}/>
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