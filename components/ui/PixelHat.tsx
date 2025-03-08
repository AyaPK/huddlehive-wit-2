import React from 'react';
import { View } from 'react-native';

interface PixelHatProps {
  size?: number;
  color?: string;
}

export const PixelHat: React.FC<PixelHatProps> = ({
  size = 24,
  color = '#000000',
}) => {
  const pixelSize = size / 8;

  const Pixel = ({ x, y }: { x: number; y: number }) => (
    <View
      style={{
        position: 'absolute',
        left: x * pixelSize,
        top: y * pixelSize,
        width: pixelSize,
        height: pixelSize,
        backgroundColor: color,
      }}
    />
  );

  return (
    <View style={{ width: size, height: size, position: 'relative' }}>
      {/* Brim of the hat */}
      <Pixel x={1} y={6} />
      <Pixel x={2} y={6} />
      <Pixel x={3} y={6} />
      <Pixel x={4} y={6} />
      <Pixel x={5} y={6} />
      <Pixel x={6} y={6} />

      {/* Crown of the hat */}
      <Pixel x={2} y={3} />
      <Pixel x={3} y={3} />
      <Pixel x={4} y={3} />
      <Pixel x={5} y={3} />

      <Pixel x={2} y={4} />
      <Pixel x={3} y={4} />
      <Pixel x={4} y={4} />
      <Pixel x={5} y={4} />

      <Pixel x={2} y={5} />
      <Pixel x={3} y={5} />
      <Pixel x={4} y={5} />
      <Pixel x={5} y={5} />
    </View>
  );
};
