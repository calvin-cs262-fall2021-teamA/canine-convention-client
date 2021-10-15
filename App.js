import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import StartScreen from './screens/start';
import SignUpScreen from './screens/signUp';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Home-GPS" component={HomeScreen} options={{headerStyle:{backgroundColor: '#16BAC6'}}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerStyle:{backgroundColor: '#16BAC6'}}}/>
        <Stack.Screen name="Start" component={StartScreen} options={{headerStyle:{backgroundColor: '#16BAC6'}}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerStyle:{backgroundColor: '#16BAC6'}}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
