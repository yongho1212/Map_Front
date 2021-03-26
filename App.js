/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Hello from './Map/Hello';
//import MyPage from './Screens/MyPage/index';
// import LocationSearch from './Screens/LocationSearch';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Hello />
    </>
  );
};


export default App;