import React, {createRef}  from 'react'
import { View, Dimensions, Text } from 'react-native';
import MyMapView from './Map/MapView';
import BottomSheet from 'reanimated-bottom-sheet';
import { useMap } from './Map/useMap';
import Animated from 'react-native-reanimated';
import LocationSearch from './Components/LocationSearch';






class MapContainer extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        region: {}
    };
    this.sheetRef = createRef();
    this.mapRef = useMap();
    };
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

    getCoordsFromName(loc) {
        this.setState({
            region: {
                latitude: loc.lat,
                longitude: loc.lng,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003
            }
        });
    }

    onMapRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <MapInput notifyChange={(loc) => this.getCoordsFromName(loc)}
                    />
                </View>

                {
                    this.state.region['latitude'] ?
                        <View style={{ flex: 1 }}>
                            <MyMapView
                                region={this.state.region}
                                onRegionChange={(reg) => this.onMapRegionChange(reg)} />
                        </View> : null}
                        <BottomSheet
                         ref={sheetRef}
                         snapPoints={[450, 300, 0]}
                         borderRadius={10}
                         renderContent={renderContent}
                        />

            </View>
        );
    }
}

export default MapContainer;
