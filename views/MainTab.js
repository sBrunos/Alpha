

import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home, Login, Profile } from './Index';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const color = "#FFF"

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home}
            options={{
                title: 'Alpha GastroBar',
                headerTintColor: '#FFF',
                headerStyle: { backgroundColor: "#009387" },
                headerTitleStyle: { alignSelf: "center" },
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                        backgroundColor="#009387"
                        onPress={() => navigation.openDrawer()}>
                    </Icon.Button>
                )
            }} />
    </HomeStack.Navigator>
)

const ProfileStackScreen = ({ navigation }) => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Profile" component={Profile}
            options={{
                title: 'Alpha GastroBar',
                headerTintColor: '#FFF',
                headerStyle: { backgroundColor: "#009387" },
                headerTitleStyle: { alignSelf: "center" },
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                        backgroundColor="#009387"
                        onPress={() => navigation.openDrawer()}>
                    </Icon.Button>
                )
            }} />
    </HomeStack.Navigator>
)

const LoginStackScreen = ({ navigation }) => (
    <LoginStack.Navigator>
        <LoginStack.Screen name="Login" component={Login}
            options={{
                title: 'Alpha GastroBar',
                headerTintColor: '#FFF',
                headerStyle: { backgroundColor: "#009387" },
                headerTitleStyle: { alignSelf: "center" },
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                        backgroundColor="#009387"
                        onPress={() => navigation.openDrawer()}>
                    </Icon.Button>
                )
            }} /></LoginStack.Navigator>
)

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: '#009387' }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'home',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Login"
            component={LoginStackScreen}
            options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-notifications" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />




    </Tab.Navigator>


);


export default MainTabScreen;

