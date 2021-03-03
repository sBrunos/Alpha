import React, {useState, useEffect} from 'react';
import {Text, View, Button, Alert } from 'react-native';

export default function Profile(props){
    console.log(props);

    return(
        <View>
            <Text>Esse é o component Rastreio</Text>
            <Button title='Go to Login' onPress={() => props.navigation.navigate('Login', {id:30})}/>
        </View>
    )
}