
import React, {useState, useEffect} from 'react';
import {Text, View, Button, Alert } from 'react-native';
import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home,Login,Tracking} from './views/Index';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
       options={{  title: 'Seja Bem-vindo à Alpha', headerTintColor:'#333',headerStyle:{backgroundColor:'#77bc44'}, headerTitleStyle:{fontWeight: "bold", alignSelf: "center"}}}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tracking" component={Tracking} />
      {/* <Stack.Screen name="RestrictedArea" component={RestrictedArea} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


