import React from 'react';
import { View } from 'react-native';

interface NoAccessoryProps {
  size: number;
  color: string;
}

export const NoAccessory: React.FC<NoAccessoryProps> = ({
  size,
  color,
}) => {
  const pixelSize = size / 16;
  const mainColor = '#CCCCCC';
  const outlineColor = '#000000';

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
      {/* Circle outline */}
      <Pixel x={6} y={4} color={outlineColor} />
      <Pixel x={7} y={3} color={outlineColor} />
      <Pixel x={8} y={3} color={outlineColor} />
      <Pixel x={9} y={4} color={outlineColor} />
      <Pixel x={10} y={5} color={outlineColor} />
      <Pixel x={10} y={6} color={outlineColor} />
      <Pixel x={9} y={7} color={outlineColor} />
      <Pixel x={8} y={8} color={outlineColor} />
      <Pixel x={7} y={8} color={outlineColor} />
      <Pixel x={6} y={7} color={outlineColor} />
      <Pixel x={5} y={6} color={outlineColor} />
      <Pixel x={5} y={5} color={outlineColor} />

      {/* Circle fill */}
      <Pixel x={7} y={4} color={mainColor} />
      <Pixel x={8} y={4} color={mainColor} />
      <Pixel x={9} y={5} color={mainColor} />
      <Pixel x={9} y={6} color={mainColor} />
      <Pixel x={8} y={7} color={mainColor} />
      <Pixel x={7} y={7} color={mainColor} />
      <Pixel x={6} y={6} color={mainColor} />
      <Pixel x={6} y={5} color={mainColor} />

      {/* Diagonal line (slash) */}
      <Pixel x={5} y={3} color={outlineColor} />
      <Pixel x={6} y={4} color={outlineColor} />
      <Pixel x={7} y={5} color={outlineColor} />
      <Pixel x={8} y={6} color={outlineColor} />
      <Pixel x={9} y={7} color={outlineColor} />
      <Pixel x={10} y={8} color={outlineColor} />
    </View>
  );
};
