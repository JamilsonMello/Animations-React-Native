import React from 'react';
import {StatusBar} from 'react-native';

import BallTiming from './animations/Ball-timing';
import BallSpring from './animations/Ball-spring';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <BallSpring />
    </>
  );
};

export default App;
