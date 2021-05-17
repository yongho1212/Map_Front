import React, {Component} from 'react';
import { View, Text, Alert, SafeAreaView, Pressable } from 'react-native';
import { Platform, PermissionsAndroid } from 'react-native';
import { Marker } from 'react-native-maps';
import styles from './styles';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import MyMapView from '../../Components/MyMapView';
import LocationSearch from '../LocationSearch';

import MakeRoomButton from '../../Components/MakeRoomButton';

import Geolocation from '@react-native-community/geolocation';

import {useNavigation} from '@react-navigation/native';


export default class Main extends Component {
    constructor(props) {
        super(props);
        
        this.getData=this.getData.bind(this);
        

        this.state = {
            region: {
                latitude: 37.49783315274643, 
                longitude: 127.02783092726877,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121, 
                address: 0,
            },
            roomRegion: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                address: 0,
            },
            data: [],
            
        }
    }

    getData(data) {
        this.setState({data: data});
    }

    componentDidMount() {
        this.initLocation();
        if(this.props.route.params !== undefined) {
            Alert.alert("방 개설 완료");
            this.addRoom();
        }
    }

    onMapRegionChange(region) {
        this.setState({ region });
    }

    // 현재 자기 위치 불러오기
    initLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    },
                });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 } 
        )
    }

    //방 추가
    addRoom = () => {
        this.setState({
          roomRegion: {
            latitude: this.props.route.params.roomLat,
            longitude: this.props.route.params.roomLng,
          },
        });
    }

    getCoords = (loc) => {
        this.setState({
            region: {
                latitude: loc.lat,
                longitude: loc.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121, 
            }
        })
    }

    //마커 클릭 시 데이터 전달받음
    getData = (data) => {
        this.setState({data: data})
    }

    renderContent = () => (        
        <View
          style={{
            flex: 0,
            backgroundColor: '#fff',
            padding: 20,
            height: 600,
          }}
        >
            
            <LocationSearch 
                notifyChange={(loc) => this.getCoords(loc)}                
            />          
              
              
            <MakeRoomButton/>          
            
        </View>
    );

    bs = React.createRef()


    
    render() {

        


        return (
            <View >                
                <MyMapView
                    region={this.state.region}
                    onRegionChange={(reg) => this.onMapRegionChange(reg)}                    
                    sendData={this.getData}  
                    showsmylocationbutton={true}
                >       
                </MyMapView>   

                {/*<BottomSheet
                    ref={this.bs}
                    renderContent={this.renderContent}
                    snapPoints={[300, 10, 0]}
                    initialSnap={2}
                    borderRadius={10}
                    enabledContentTapInteraction={false} //bottom sheet내에서 onPress 활성화
                /> */}
               {/* <View style={styles.drawerBtnContainer}>
                    <Pressable
                    onPress={() => toggleDrawer()}
                    >
                        <Text>drawer open</Text>
                    </Pressable>
            </View>*/}

                <View style={styles.btmContainer}>
                    <Pressable 
                    style={styles.btmButton}
                    onPress = { () => {this.props.navigation.navigate('searching')}}
                    >
                        <Text> Search</Text>
                    </Pressable>

                    <Pressable 
                    style={styles.btmButton}
                    onPress = { () => {this.props.navigation.navigate('hosting')}}
                    >
                        <Text> Make</Text>
                    </Pressable>

                    <Pressable 
                    style={styles.btmButton}
                    onPress = { () => {this.props.navigation.navigate('social')}}
                    >
                        <Text> Chat/Mate</Text>
                    </Pressable>
                
                </View>
                

                                       
            </View>
        )
    }
}