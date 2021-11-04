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
            <View style={{mmarginTop: 30, marginBottom: 50, left: '5%'}}>
                <Text style={globalStyles.title}>Match found:</Text>
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