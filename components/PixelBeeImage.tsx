import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface PixelBeeImageProps {
  variant?: 'large' | 'small';
  skin?: 'normal' | 'rainbow';
}

const styles = StyleSheet.create({
  beeImage: {
    width: 64,
    height: 64,
    marginBottom: 30
  },
  largeBee: {
    transform: [{ scale: 2 }],
  },
  smallBee: {
    transform: [{ scale: 0.8 }],
  },
});

export const PixelBeeImage: React.FC<PixelBeeImageProps> = ({ variant = 'large', skin = 'normal' }) => {
  return (
    <Image 
      source={skin === 'rainbow' ? require('@/components/ui/bee-rainbow.png') : require('@/components/ui/bee-big.png')} 
      style={[
        styles.beeImage,
        variant === 'small' ? styles.smallBee : styles.largeBee,
      ]} 
      resizeMode="contain"
    />
  );
};
