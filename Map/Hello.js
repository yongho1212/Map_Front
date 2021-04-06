import React, {Component} from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import LocationSearch from '../Components/LocationSearch';
import MyMapView from './MapView';

import {getLocation, geocodeLocationByName,geocodeLocationByCoords} from '../Service/service';
// hi
export default class Hello extends Component {
  constructor(props) {
      super(props);
      this.state = {
          region: {
              latitude: 37.49784984651033,
              longitude: 127.02764321415104,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121, 
              address: 0,
          }
           
      }
  }

  componentDidMount() {
    this.getInitialState();
}

getInitialState() {
    getLocation().then(
        (data) => {
            console.log(data);
            this.setState({
                region: {
                    latitude: data.latitude,
                    longitude: data.longitude,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003
                }
            });
        }
    );
}

  onMapRegionChange(region) {
      this.setState({ region });
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

  renderContent = () => (  
      <View
        style={{
          flex: 0,
          backgroundColor: '#fff',
          padding: 16,
          height: 200,
        }}
      >
          <LocationSearch notifyChange={(loc) => this.getCoords(loc)}/>             
      </View>
  );

  bs = React.createRef()

  render() {
      return (
          <View style={{width: '100%', height: '100%'}}>
              <MyMapView
                  region={this.state.region}
                  onRegionChangeComplete={(reg) => this.onMapRegionChange(reg)}                    
              />                 
              <BottomSheet
              ref={this.bs}
                  renderContent={this.renderContent}
                  snapPoints={[200, 400]}
                  borderRadius={10}
                  
       
              />
          </View>
      )
  }
}