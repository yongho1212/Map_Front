import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import DrawerNavigator from './src/Navigation/Drawer';

// import Router from './src/Navigation/Router'; 


// import Hosting from './src/Screens/Hosting/index';



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      
      <DrawerNavigator />
     

      
    </>
  );
};

export default App;