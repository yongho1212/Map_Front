import React from 'react';
import {Alert, View} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const LocationSearch = (props) => {   
    return (       
        <View style={{width: '100%', height: '20%'}}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                autoFocus={true}             
                fetchDetails={true}
                onPress={(data, details = null) => {
                    props.notifyChange(details.geometry.location);             
                }}
                query={{
                    key: 'AIzaSyBMk4s9KTSOS2IICXgJ8jQQAeITjx8f3fE',
                    language: 'ko',
                }}
            />
        </View>
    )
}

export default LocationSearch;