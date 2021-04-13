import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const RoomLocationSearch = (props) => {   

    const navigation = useNavigation();

    return (       
        <View style={{width: '100%', height: '100%'}}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                autoFocus={true}             
                fetchDetails={true}
                onPress={(data, details = null) => {
                    navigation.push('MakeRoom', {lat: details.geometry.location.lat, lng: details.geometry.location.lng, address: data.description});                 
                }}
                query={{
                    key: 'AIzaSyBMk4s9KTSOS2IICXgJ8jQQAeITjx8f3fE',
                    language: 'ko',
                }}
            />
        </View>
    )
}

export default RoomLocationSearch;