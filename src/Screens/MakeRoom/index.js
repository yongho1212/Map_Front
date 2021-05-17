import React from "react";
import {Component, useState} from "react";
import { View, Text, Pressable, TextInput, Button, Alert } from "react-native";

import styles from './styles';

export default class MakeRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            room: {
                latitude: 0,
                longitude: 0,
                address: "",
                title: "",
                content: "",
                nickname: "",
            },
        }
    }

    componentDidMount() {
        if(this.props.route.params !== undefined) {
            this.setState({
                room: {
                    latitude: this.props.route.params.lat,
                    longitude: this.props.route.params.lng,
                    address: this.props.route.params.address,
                },
            })
        }
    }

    //만든 방 위치정보 메인화면에 전송
    passing = () => {
        this.props.navigation.push('Main', {roomLat: this.props.route.params.lat, roomLng: this.props.route.params.lng})
    }

    
    //서버와 연동
    connect = () => {
        const {title, content} = this.state;
        const {latitude, longitude, address} = this.state.room;

        const URL = "http://localhost:3000/creatRoom";
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                content: content,
                latitude: latitude,
                longitude: longitude,
                address: address,
            })
        })
    }

    render() {
        return (
            <View style={{top:50}}>
                <View>
                    <Text>지역</Text>
                    <Pressable 
                        style={styles.Input_Destination}
                        onPress={() => this.props.navigation.navigate('RoomLocationSearch')}
                    >
                        <Text>{this.state.room.address}</Text>
                    </Pressable>
                </View>
                <View>
                    <Text>방제</Text>
                    <TextInput 
                        style={styles.Input_Title} 
                        placeholder="같이 놀아요" 
                        onChangeText={title => this.setState({title})}
                    />
                </View>
                <View>
                    <Text>내용</Text>
                    <TextInput 
                        style={styles.Input_Content} 
                        onChangeText={content => this.setState({content})}
                    />
                </View>
                <Button
                    title="방 개설" 
                    onPress={() => {this.connect(); this.passing();}} 
                    style={styles.creatButton}
                ></Button>
            </View>
        )
    }

}