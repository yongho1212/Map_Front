import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../Screens/Main';
import LocationSearch from '../Screens/LocationSearch';
import RoomLocationSearch from '../Screens/RoomLocationSearch';
import MakeRoom from '../Screens/MakeRoom';

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={"Main"}
                    component={Main}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen 
                    name={"LocationSearch"}
                    component={LocationSearch}
                    options={{
                        title: "Search Your Destination"
                    }}
                />

                <Stack.Screen 
                    name={"RoomLocationSearch"}
                    component={RoomLocationSearch}
                    options={{
                        title: "Search Your Destination"
                    }}
                />      

                <Stack.Screen 
                    name={"MakeRoom"}
                    component={MakeRoom}
                    options={{
                        headerShown: false,
                    }}
                />              
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;