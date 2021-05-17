import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../Screens/Main/index';
import HostingBtn from '../Screens/btm3Btn/hostingBtn';
import SearchingBtn from '../Screens/btm3Btn/searchingBtn';
import SocialBtn from '../Screens/btm3Btn/socialBtn';

// fuck git 
// 형
import DrawerNavigator from './Drawer';

const Stack = createStackNavigator();

const Router = (props) => {
    return (

            <Stack.Navigator>
                
                <Stack.Screen 
                    name={"Main"}
                    component={Main}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen 
                    name={"hosting"}
                    component={HostingBtn}
                    options={{
                        title: "Search Your Destination",
                        headerShown: false,
                    }}
                />

                <Stack.Screen 
                    name={"searching"}
                    component={SearchingBtn}
                    options={{
                        title: "Search Your Destination"
                    }}
                />      

                <Stack.Screen 
                    name={"social"}
                    component={SocialBtn}
                    
                />              
            </Stack.Navigator>

    )
}

export default Router;