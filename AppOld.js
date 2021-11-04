import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import StartScreen from './screens/start';
import SignUpScreen from './screens/signUp';
import FindEvent from './screens/eventFind';
import Profile from './screens/profile';
import ProfileEdit from './screens/profile_edit';
import DogProfileEdit from './screens/dogprofile_edit';
import Map from './screens/map';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home-GPS" component={HomeScreen} options={{headerStyle:{backgroundColor: '#16BAC6'}}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerStyle:{backgroundColor: '#16BAC6'}}}/>
        <Stack.Screen name="Start" component={StartScreen} options={{headerStyle:{backgroundColor: '#16BAC6'}}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerStyle:{backgroundColor: '#16BAC6'}}}/>
        <Stack.Screen name="FindEvent" component={FindEvent} options={{headerStyle:{backgroundColor: '#16BAC6'}}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerStyle:{backgroundColor: '#16BAC6'}}}/>
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} options={{headerStyle:{backgroundColor: '#16BAC6'}}}/>
        <Stack.Screen name="DogProfileEdit" component={DogProfileEdit} options={{headerStyle:{backgroundColor: '#16BAC6'}}}/>
        <Stack.Screen name="Map" component={Map} options={{headerStyle:{backgroundColor: '#16BAC6'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
