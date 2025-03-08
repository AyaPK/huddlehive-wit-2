import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { PixelBeeImage } from './PixelBeeImage';

export function AnimatedPixelBee({ skin = 'normal' }: { skin?: 'normal' | 'rainbow' }) {
  const yPosition = useRef(new Animated.Value(0)).current;

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

    // Cleanup animation when component unmounts
    return () => {
      yPosition.stopAnimation();
    };
  }, []);

  return (
    <Animated.View style={{ transform: [{ translateY: yPosition }] }}>
      <PixelBeeImage variant="large" skin={skin} />
    </Animated.View>
  );
}
