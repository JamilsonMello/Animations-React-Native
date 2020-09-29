import React, {useRef, useCallback, useState} from 'react';
import {Animated, View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const AnimationSpring: React.FC = () => {
  const [value, setValue] = useState(false);
  const ball = useRef(new Animated.Value(0)).current;

  const handleButton = useCallback(() => {
    const go = value ? 0 : 400;

    Animated.spring(ball, {
      toValue: go,
      bounciness: 10,
      speed: 50,

      // tension: 50,
      // friction: 0,

      // stiffness: 100,
      // damping: 10,
      // mass: 100,
      useNativeDriver: true,
    }).start();

    setValue(!value);
  }, [ball, value]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, {transform: [{translateY: ball}]}]} />
      <TouchableOpacity style={styles.button} onPress={handleButton}>
        <Text>Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'red',
  },
  button: {
    position: 'absolute',
    bottom: 50,
    width: 160,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AnimationSpring;
