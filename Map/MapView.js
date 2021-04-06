import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


const MyMapView = (props) => {
  return (
      <MapView 
      mapPadding={{ top: 0, right: 0, bottom: 500, left: 0 }} 
          style={{width: '100%', height: '100%'}}
          region={props.region}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          showsUserLocation={true}
          onRegionChangeComplete={(reg) => props.onRegionChangeComplete(reg)}                   
      >
          
      </MapView>
  );
}

export default MyMapView;