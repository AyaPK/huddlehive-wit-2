import React from 'react';
import { Image, StyleSheet } from 'react-native';
import BeeImage from './ui/bee-big.png';

const styles = StyleSheet.create({
  beeImage: {
    width: 64,
    height: 64,
    transform: [{ scale: 2 }],
    marginBottom: 50
  },
});

export const PixelBeeImage: React.FC = () => {
  return <Image source={BeeImage} style={styles.beeImage} resizeMode="contain" />;
};
