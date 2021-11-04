import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import blankDogPFP from '../assets/blankDogPFP.jpg'

//Profile is set up to get location from home. 
//It's not being printed because the location text is too long currently
//

export default function Profile({route, navigation}){
    const{location} = route.params;
    return(
        <View style={{backgroundColor: '#EFF0F4'}}>
            <TouchableOpacity style={globalStyles.editBtn} onPress={() => navigation.navigate('ProfileEdit')}>
                <Text style={globalStyles.loginText,globalStyles.ButtonsText}>Edit</Text>
            </TouchableOpacity>
            <View style={{marginVertical: 80, left: '5%'}}>
                <Text style={globalStyles.subtitle}>John Doe</Text>
                <Text style={globalStyles.subtitle}>616-222-5555</Text>
                <Text style={globalStyles.subtitle}>Grand Rapids{"\n"}</Text>
            </View>
            <View style={[globalStyles.container, {marginBottom: 80}]}>
                <Image source={blankPFP} style={globalStyles.picture}/>
            </View>
            
            <PagerView style={globalStyles.pager} initialPage={0}>
                <View style={globalStyles.container} key="1">
                    <Text style={globalStyles.dogName}>Fido</Text>
                    <Image source={blankDogPFP} style={globalStyles.pictureDog}/>
                    <View style={globalStyles.row}>
                        <TouchableWithoutFeedback>
                            <View style={globalStyles.tag}>
                                <Text style={globalStyles.tagText}>Spayed</Text>
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
                    <Text style={globalStyles.dogName}>Rover</Text>
                    <Image source={blankDogPFP} style={globalStyles.pictureDog}/>
                </View>
                <View style={globalStyles.container} key="3">
                    <Text style={globalStyles.dogName}>Snowball</Text>
                    <Image source={blankDogPFP} style={globalStyles.pictureDog}/>
                </View>
            </PagerView>
        </View>
    );
}