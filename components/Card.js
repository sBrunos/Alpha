import React, { useState, useEffect } from 'react';
import { Text, View, Alert, Image } from 'react-native';
import Card from 'react-bootstrap/Card'

import {getTheme} from 'react-native-material-kit'

export default function CardComponent(props) {

    const { name, setName } = useState('')
    const { description, setDescription } = useState('')
    const { price, setPrice } = useState('')
    const theme = getTheme();



    const menu = 'aaaaaa';
    return (
        <View style={theme.cardStyle}>
        <Image source={require('../assets/img/profile-5.png')} style={theme.cardImageStyle} />
        <Text style={theme.cardTitleStyle}>Welcome</Text>
        <Text style={theme.cardContentStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </Text>
        <Text style={theme.cardActionStyle}>My Action</Text>
      </View>
    )
}