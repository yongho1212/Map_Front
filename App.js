import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';


// import Control from './src/Navigation/Ctrl'; 

import AboutMe from './src/Screens/ProfileMaking/AboutMe/index';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      
      <AboutMe />
      
    </>
  );
};

export default App;