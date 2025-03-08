import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface RainbowCircleProps {
  size: number;
}

export const RainbowCircle: React.FC<RainbowCircleProps> = ({ size }) => {
  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8F00FF'];
  
  if (Platform.OS === 'web') {
    return (
      <View
        style={[
          styles.circle,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
          },
        ]}
      />
    );
  }

  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={[
        styles.circle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    borderWidth: 2,
    borderColor: '#00000022',
    overflow: 'hidden',
  },
});
