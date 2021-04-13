import React, {Component} from 'react';
import { Alert } from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import Main from '../Screens/Main';

export default class MyMapView extends Component { 
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        this.connect();
    }

    connect = () => {
        const URL = "http://localhost:3000/main";
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })        
        .then(response => response.json())
        .then(responseData => {
            this.setState({data: responseData})
        })
    }

    

    createMarker = () => {
        let marker = []
        
        for (let index = 0; index < this.state.data.length; index++) {
            this.state.data.map(data => marker.push(
            <Marker 
                coordinate={{latitude: data.latitude, longitude: data.longitude}}
                onPress={() => {
                    this.props.sendData(data);
                }}
            />))            
        }

        return marker;
    }

    render() {
        return (            
            <MapView 
                style={{width: '100%', height: '100%'}}
                region={this.props.region}
                showsUserLocation={true}
                onRegionChangeComplete={(reg) => this.props.onRegionChange(reg)}    
                           
            >
                    
                <Marker 
                    coordinate={this.props.region}                         
                />                                       
                {this.createMarker()}
            </MapView>       
        );
    }
}



    