import React from 'react';
import {View} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const LocationSearch = (props) => {
  return (
      <View style={{height: '100%', width: '100%'}}>
    <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        props.notifyChange(details.geometry.location);
      }}
      query={{
        key: 'AIzaSyDH3imine2M042LWRN1mEr24bpU7iS4dmQ',
        language: 'ko',
      }}
    />
    </View>
  );
};

export default LocationSearch;