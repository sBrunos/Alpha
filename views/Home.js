import React, {useState, useEffect} from 'react';
import {Text, View, Button, Alert } from 'react-native';
import CardComponent from '../components/Card';

export default function Home(props){

    return(
        <View>
            {/* <CardComponent/> */}
            <Text>Esse é o component Homeeee</Text>
            {/* <Button title='Go to Login' onPress={() => props.navigation.navigate('Login', {id:30})}/> */}
        </View>
    )
}