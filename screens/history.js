import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import PagerView from 'react-native-pager-view';
//import {Collapse, CollapseBody, CollapseHeader} from "accordion-collapse-react-native";
//import Collapsible from 'react-native-collapsible';
import CollapsibleList from "react-native-collapsible-list";
import { globalStyles } from '../styles/global';

export default function History({navigation}){
    return (
        <View style={globalStyles.container}>
          <CollapsibleList
            numberOfVisibleItems={1}
            wrapperStyle={{    flex: 1,
                marginTop: 20,
                overflow: "hidden",
                backgroundColor: "#FFF",
                borderRadius: 5}}
            buttonContent={
              <View style={globalStyles.homeBtns}>
                <Text style={globalStyles.homeButtonsText}>Button</Text>
              </View>
            }
          >
            <View style={{borderColor: "#CCC",
    padding: 10}}>
              <Text>Hello Collapsable List :)</Text>
            </View>
            <View style={{borderColor: "#CCC",
    padding: 10}}>
              <Text>Collapsable List Item</Text>
            </View>
            <View style={{borderColor: "#CCC",
    padding: 10}}>
              <Text>Another Collapsable List Item</Text>
            </View>
          </CollapsibleList>
        </View>
      );
}