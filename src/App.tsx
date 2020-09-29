import React from 'react';
import {StatusBar} from 'react-native';

import BallTiming from './animations/Ball-timing';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <BallTiming />
    </>
  );
};

export default App;
