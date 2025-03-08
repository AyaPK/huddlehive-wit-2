import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { PixelBeeImage } from './PixelBeeImage';

export function AnimatedPixelBee() {
  const yPosition = useRef(new Animated.Value(0)).current;
  const isFirstRender = useRef(true);

  const animate = () => {
    Animated.sequence([
      Animated.timing(yPosition, {
        toValue: -10,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(yPosition, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      })
    ]).start(() => animate()); // Loop the animation
  };

  useEffect(() => {
    if (isFirstRender.current) {
      animate();
      isFirstRender.current = false;
    }
  }, []);

  return (
    <Animated.View style={{ transform: [{ translateY: yPosition }] }}>
      <PixelBeeImage variant="large" />
    </Animated.View>
  );
}
