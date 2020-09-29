import React, {useState, useEffect} from 'react';
import {Text, View, Button, Alert } from 'react-native';

export default function Login(props){
    return(
        <View>
            <Text>Esse é o component Login com id {props.route.params.id}</Text>
        </View>
    )
}