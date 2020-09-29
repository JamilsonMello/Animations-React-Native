import React from 'react';
import {StatusBar} from 'react-native';

import BallTiming from './animations/Ball-timing';
import BallSpring from './animations/Ball-spring';
import BallDecay from './animations/Ball-decay';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <BallDecay />
    </>
  );
};

export default App;
