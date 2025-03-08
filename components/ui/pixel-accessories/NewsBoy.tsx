import React from 'react';
import { View } from 'react-native';

interface NewsBoyProps {
  size: number;
  color: string;
}

export const NewsBoy: React.FC<NewsBoyProps> = ({
  size,
  color,
}) => {
  const pixelSize = size / 16;
  const mainColor = color;
  const skullColor = '#FFFFFF';
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
      {/* Top point */}
      <Pixel x={7} y={1} color={outlineColor} />
      <Pixel x={8} y={1} color={outlineColor} />
      <Pixel x={7} y={2} color={mainColor} />
      <Pixel x={8} y={2} color={mainColor} />
      
      {/* Main hat - outline */}
      <Pixel x={4} y={3} color={outlineColor} />
      <Pixel x={5} y={2} color={outlineColor} />
      <Pixel x={6} y={2} color={outlineColor} />
      <Pixel x={9} y={2} color={outlineColor} />
      <Pixel x={10} y={2} color={outlineColor} />
      <Pixel x={11} y={3} color={outlineColor} />
      
      {/* Main hat - fill */}
      <Pixel x={5} y={3} color={mainColor} />
      <Pixel x={6} y={3} color={mainColor} />
      <Pixel x={7} y={3} color={mainColor} />
      <Pixel x={8} y={3} color={mainColor} />
      <Pixel x={9} y={3} color={mainColor} />
      <Pixel x={10} y={3} color={mainColor} />
      
      {/* Lower part - outline */}
      <Pixel x={3} y={4} color={outlineColor} />
      <Pixel x={4} y={4} color={outlineColor} />
      <Pixel x={11} y={4} color={outlineColor} />
      <Pixel x={12} y={4} color={outlineColor} />
      <Pixel x={3} y={5} color={outlineColor} />
      <Pixel x={12} y={5} color={outlineColor} />
      
      {/* Lower part - fill */}
      <Pixel x={4} y={4} color={mainColor} />
      <Pixel x={5} y={4} color={mainColor} />
      <Pixel x={6} y={4} color={mainColor} />
      <Pixel x={7} y={4} color={mainColor} />
      <Pixel x={8} y={4} color={mainColor} />
      <Pixel x={9} y={4} color={mainColor} />
      <Pixel x={10} y={4} color={mainColor} />
      <Pixel x={11} y={4} color={mainColor} />
      
      <Pixel x={4} y={5} color={mainColor} />
      <Pixel x={5} y={5} color={mainColor} />
      <Pixel x={6} y={5} color={mainColor} />
      <Pixel x={7} y={5} color={mainColor} />
      <Pixel x={8} y={5} color={mainColor} />
      <Pixel x={9} y={5} color={mainColor} />
      <Pixel x={10} y={5} color={mainColor} />
      <Pixel x={11} y={5} color={mainColor} />

      {/* Skull emblem */}
      <Pixel x={7} y={4} color={skullColor} />
      <Pixel x={8} y={4} color={skullColor} />
      <Pixel x={7} y={5} color={skullColor} />
      <Pixel x={8} y={5} color={skullColor} />

      {/* Shadows */}
      <Pixel x={4} y={6} color={shadowColor} />
      <Pixel x={5} y={6} color={shadowColor} />
      <Pixel x={6} y={6} color={shadowColor} />
      <Pixel x={7} y={6} color={shadowColor} />
      <Pixel x={8} y={6} color={shadowColor} />
      <Pixel x={9} y={6} color={shadowColor} />
      <Pixel x={10} y={6} color={shadowColor} />
      <Pixel x={11} y={6} color={shadowColor} />
    </View>
  );
};
