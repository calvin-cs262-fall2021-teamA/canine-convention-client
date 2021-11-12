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
import blankDogPFP from '../assets/blankDogPFP.jpg';
import blankPFP from '../assets/blankPFP.png';


export default function FindSuccess({navigation}){
    return(
        <View style={{backgroundColor: '#EFF0F4'}}>
            <View style={{marginTop: "2%", marginLeft: '5%'}}>
                <Text style={globalStyles.subtitle}>Match found:</Text>
                <Text style={globalStyles.profileText}>John Doe</Text>
                <Text style={globalStyles.profileText}>616-222-5555</Text>
                {/* <Text style={globalStyles.profileText}>Grand Rapids{"\n"}</Text> */}
            </View>
            <Image source={blankPFP} style={globalStyles.picture}/>
            
            <PagerView style={globalStyles.pager} initialPage={0}>
                <View style={globalStyles.container} key="1" collapsable='false'>
                    <Text style={globalStyles.dogName}>Fido</Text>
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
            </PagerView>
            <View style={globalStyles.row}>
                <TouchableOpacity style={globalStyles.acceptBtns} onPress={() => navigation.navigate('Home')}>
                    <Text style={globalStyles.loginText, globalStyles.ButtonsText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.acceptBtns} onPress={() => navigation.navigate('FindEvent')}>
                    <Text style={globalStyles.loginText, globalStyles.ButtonsText}>Decline</Text>
                 </TouchableOpacity>
            </View>
        </View>
    );
}