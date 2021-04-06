import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


const MyMapView = (props) => {
  return (
      <MapView 
          style={{width: '100%', height: '100%'}}
          region={props.region}

          showsMyLocationButton={true}
          showsUserLocation={true}
          onRegionChangeComplete={(reg) => props.onRegionChangeComplete(reg)}                   
      >
          
      </MapView>
  );
}

export default MyMapView;