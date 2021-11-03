import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from "react-native";
import { globalStyles } from '../styles/global';
import blankDogPFP from '../assets/blankDogPFP.jpg'

import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

const CONTENT = [
  {
    title: 'Oct 31 - Grand Rapids',
    content:
    <View style={globalStyles.historyContainer}>
      <View style={{marginBottom: 20}}>
        <Text style={globalStyles.historyText}>John Doe</Text>
        <Text style={globalStyles.historyText}>616-222-5555</Text>
        <Text style={globalStyles.historyText}>Grand Rapids</Text>
      </View>
      <Text style={globalStyles.historyText}>Fido</Text>
      <Image source={blankDogPFP} style={globalStyles.pictureDog}/>
      <View style={globalStyles.row}>
        <TouchableWithoutFeedback>
          <View style={[globalStyles.historyTag, {marginLeft: 10}]}>
              <Text style={globalStyles.tagText}>Spayed</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={[globalStyles.historyTag, {marginLeft: 10, marginRight:10}]}>
            <Text style={globalStyles.tagText}>Large</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={globalStyles.row}>
        <TouchableWithoutFeedback>
          <View style={globalStyles.historyTag}>
            <Text style={globalStyles.tagText}>Male</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={[globalStyles.historyTag, {marginLeft: 10}]}>
            <Text style={globalStyles.tagText}>Calm</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={globalStyles.row}>
        <TouchableWithoutFeedback>
          <View style={globalStyles.historyTag}>
            <Text style={globalStyles.tagText}>2 years</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>,
  },
  {
    title: 'Oct 28 - Grand Rapids',
    content:
      'Event 2 info'
  },
  {
    title: 'Oct 26 - Grand Rapids',
    content:
    <View style={globalStyles.historyContainer}>
      <View style={{marginBottom: 20}}>
        <Text style={globalStyles.historyText}>John Doe</Text>
        <Text style={globalStyles.historyText}>616-222-5555</Text>
        <Text style={globalStyles.historyText}>Grand Rapids</Text>
      </View>
      <Text style={globalStyles.historyText}>Snowball</Text>
      <Image source={blankDogPFP} style={globalStyles.pictureDog}/>
      <View style={globalStyles.row}>
        <TouchableWithoutFeedback>
          <View style={[globalStyles.historyTag, {marginLeft: 10}]}>
              <Text style={globalStyles.tagText}>Neutered</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={[globalStyles.historyTag, {marginLeft: 10, marginRight:10}]}>
            <Text style={globalStyles.tagText}>Small</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={globalStyles.row}>
        <TouchableWithoutFeedback>
          <View style={globalStyles.historyTag}>
            <Text style={globalStyles.tagText}>Female</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={[globalStyles.historyTag, {marginLeft: 10}]}>
            <Text style={globalStyles.tagText}>Playful</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={globalStyles.row}>
        <TouchableWithoutFeedback>
          <View style={globalStyles.historyTag}>
            <Text style={globalStyles.tagText}>1 year</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>,
  },
];


export default function History({navigation}){
  const [activeSections, setActiveSections] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[{backgroundColor: '#F5FCFF', padding: 10,}, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={{textAlign: 'center', fontSize: 16, fontWeight: '500'}}>{section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[{padding: 20, backgroundColor: '#fff', alignItems: 'center'}, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text
          style={{ textAlign: 'center' }}>
          {section.content}
        </Text>
      </Animatable.View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[globalStyles.container, {paddingTop: 30}]}>
        <ScrollView>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '300', marginBottom: 20,}}>
              History of Events
          </Text>

          <Accordion style={{height: 400}}
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  active: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  inactive: {
    backgroundColor: '#EFF0F4',
  },
});
