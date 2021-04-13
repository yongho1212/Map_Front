import React from 'react';
import {StatusBar} from 'react-native';

import Router from './src/Navigation/Router';

const App: () => React$Node = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default App;