import React from 'react';
import { View } from 'react-native';

interface FedoraProps {
  size: number;
  color: string;
}

export const Fedora: React.FC<FedoraProps> = ({
  size,
  color,
}) => {
  const pixelSize = size / 16;
  const mainColor = color;
  const bandColor = '#333333';
  const shadowColor = '#00000044';

  const Pixel = ({ x, y, color }: { x: number; y: number; color: string }) => (
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
      {/* Brim */}
      <Pixel x={3} y={10} color={mainColor} />
      <Pixel x={4} y={10} color={mainColor} />
      <Pixel x={5} y={10} color={mainColor} />
      <Pixel x={6} y={10} color={mainColor} />
      <Pixel x={7} y={10} color={mainColor} />
      <Pixel x={8} y={10} color={mainColor} />
      <Pixel x={9} y={10} color={mainColor} />
      <Pixel x={10} y={10} color={mainColor} />
      <Pixel x={11} y={10} color={mainColor} />
      <Pixel x={12} y={10} color={mainColor} />

      {/* Crown */}
      <Pixel x={5} y={4} color={mainColor} />
      <Pixel x={6} y={4} color={mainColor} />
      <Pixel x={7} y={4} color={mainColor} />
      <Pixel x={8} y={4} color={mainColor} />
      <Pixel x={9} y={4} color={mainColor} />
      <Pixel x={10} y={4} color={mainColor} />

      {/* Band */}
      <Pixel x={5} y={7} color={bandColor} />
      <Pixel x={6} y={7} color={bandColor} />
      <Pixel x={7} y={7} color={bandColor} />
      <Pixel x={8} y={7} color={bandColor} />
      <Pixel x={9} y={7} color={bandColor} />
      <Pixel x={10} y={7} color={bandColor} />

      {/* Side */}
      <Pixel x={5} y={5} color={mainColor} />
      <Pixel x={6} y={5} color={mainColor} />
      <Pixel x={7} y={5} color={mainColor} />
      <Pixel x={8} y={5} color={mainColor} />
      <Pixel x={9} y={5} color={mainColor} />
      <Pixel x={10} y={5} color={mainColor} />

      <Pixel x={5} y={6} color={mainColor} />
      <Pixel x={6} y={6} color={mainColor} />
      <Pixel x={7} y={6} color={mainColor} />
      <Pixel x={8} y={6} color={mainColor} />
      <Pixel x={9} y={6} color={mainColor} />
      <Pixel x={10} y={6} color={mainColor} />

      {/* Shadows */}
      <Pixel x={5} y={8} color={shadowColor} />
      <Pixel x={6} y={8} color={shadowColor} />
      <Pixel x={7} y={8} color={shadowColor} />
      <Pixel x={8} y={8} color={shadowColor} />
      <Pixel x={9} y={8} color={shadowColor} />
      <Pixel x={10} y={8} color={shadowColor} />
      <Pixel x={11} y={8} color={shadowColor} />
    </View>
  );
};
