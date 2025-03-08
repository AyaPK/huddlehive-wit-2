import React from 'react';
import { Image, StyleSheet } from 'react-native';
import BeeImage from './ui/bee-big.png';

interface PixelBeeImageProps {
  variant?: 'large' | 'small';
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

export const PixelBeeImage: React.FC<PixelBeeImageProps> = ({ variant = 'large' }) => {
  return (
    <Image 
      source={BeeImage} 
      style={[
        styles.beeImage,
        variant === 'small' ? styles.smallBee : styles.largeBee,
      ]} 
      resizeMode="contain"
    />
  );
};
