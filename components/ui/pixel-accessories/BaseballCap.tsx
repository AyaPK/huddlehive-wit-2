import React from 'react';
import { View } from 'react-native';

interface BaseballCapProps {
  size: number;
  color: string;
}

export const BaseballCap: React.FC<BaseballCapProps> = ({
  size,
  color,
}) => {
  const pixelSize = size / 16;
  const mainColor = color;
  const shadowColor = '#00000044';
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
      {/* Bill outline */}
      <Pixel x={2} y={8} color={outlineColor} />
      <Pixel x={3} y={8} color={outlineColor} />
      <Pixel x={4} y={8} color={outlineColor} />
      <Pixel x={5} y={8} color={outlineColor} />
      <Pixel x={6} y={8} color={outlineColor} />
      <Pixel x={7} y={8} color={outlineColor} />
      <Pixel x={8} y={8} color={outlineColor} />

      {/* Bill fill */}
      <Pixel x={3} y={7} color={mainColor} />
      <Pixel x={4} y={7} color={mainColor} />
      <Pixel x={5} y={7} color={mainColor} />
      <Pixel x={6} y={7} color={mainColor} />
      <Pixel x={7} y={7} color={mainColor} />

      {/* Crown outline */}
      <Pixel x={4} y={3} color={outlineColor} />
      <Pixel x={3} y={4} color={outlineColor} />
      <Pixel x={3} y={5} color={outlineColor} />
      <Pixel x={3} y={6} color={outlineColor} />

      <Pixel x={4} y={3} color={outlineColor} />
      <Pixel x={5} y={2} color={outlineColor} />
      <Pixel x={6} y={2} color={outlineColor} />
      <Pixel x={7} y={2} color={outlineColor} />
      <Pixel x={8} y={2} color={outlineColor} />
      <Pixel x={9} y={2} color={outlineColor} />
      <Pixel x={10} y={3} color={outlineColor} />
      <Pixel x={11} y={4} color={outlineColor} />
      <Pixel x={11} y={5} color={outlineColor} />
      <Pixel x={11} y={6} color={outlineColor} />

      {/* Crown fill */}
      <Pixel x={5} y={3} color={mainColor} />
      <Pixel x={6} y={3} color={mainColor} />
      <Pixel x={7} y={3} color={mainColor} />
      <Pixel x={8} y={3} color={mainColor} />
      <Pixel x={9} y={3} color={mainColor} />

      <Pixel x={5} y={4} color={mainColor} />
      <Pixel x={6} y={4} color={mainColor} />
      <Pixel x={7} y={4} color={mainColor} />
      <Pixel x={8} y={4} color={mainColor} />
      <Pixel x={9} y={4} color={mainColor} />
      <Pixel x={10} y={4} color={mainColor} />

      <Pixel x={5} y={5} color={mainColor} />
      <Pixel x={6} y={5} color={mainColor} />
      <Pixel x={7} y={5} color={mainColor} />
      <Pixel x={8} y={5} color={mainColor} />
      <Pixel x={9} y={5} color={mainColor} />
      <Pixel x={10} y={5} color={mainColor} />

      {/* Shadows */}
      <Pixel x={5} y={6} color={shadowColor} />
      <Pixel x={6} y={6} color={shadowColor} />
      <Pixel x={7} y={6} color={shadowColor} />
      <Pixel x={8} y={6} color={shadowColor} />
      <Pixel x={9} y={6} color={shadowColor} />
      <Pixel x={10} y={6} color={shadowColor} />
    </View>
  );
};
