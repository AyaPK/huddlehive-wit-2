import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { PixelBeeImage } from './PixelBeeImage';

export function AnimatedPixelBee() {
  const yPosition = new Animated.Value(0);

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        // Move up
        Animated.timing(yPosition, {
          toValue: -10,
          duration: 500,
          useNativeDriver: true,
        }),
        // Move down
        Animated.timing(yPosition, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        })
      ]).start(() => animate()); // Loop the animation
    };

    animate();
  }, []);

  return (
    <Animated.View style={{ transform: [{ translateY: yPosition }] }}>
      <PixelBeeImage variant="large" />
    </Animated.View>
  );
}
