import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { View, Button } from 'react-native';

import {useNavigation} from '@react-navigation/native';

const MakeRoomButton = () => {

    const navigation = useNavigation();

    return( 
        <Button
            title="방만들기"
            onPress={() => navigation.navigate('MakeRoom')}
        >
            
        </Button>
    )
}

export default MakeRoomButton;