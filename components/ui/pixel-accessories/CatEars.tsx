import React from 'react';
import { View } from 'react-native';

interface CatEarsHeadbandProps {
  size: number;
  color: string;
}

export const CatEars: React.FC<CatEarsHeadbandProps> = ({
  size,
  color,
}) => {
  const pixelSize = size / 16;
  const mainColor = color;
  const outlineColor = '#000000';
  const innerColor = '#FFFFFF';

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
    <View style={{ width: size, height: size + 6, position: 'relative' }}>
      {/* Left Ear */}
      {/* Outline */}
      <Pixel x={3} y={6} color={outlineColor} />
      <Pixel x={4} y={5} color={outlineColor} />
      <Pixel x={5} y={4} color={outlineColor} />
      <Pixel x={6} y={3} color={outlineColor} />
      <Pixel x={7} y={2} color={outlineColor} />
      <Pixel x={8} y={2} color={outlineColor} />
      <Pixel x={9} y={3} color={outlineColor} />
      <Pixel x={9} y={4} color={outlineColor} />
      <Pixel x={9} y={5} color={outlineColor} />
      <Pixel x={9} y={6} color={outlineColor} />
      <Pixel x={8} y={7} color={outlineColor} />
      <Pixel x={7} y={7} color={outlineColor} />

      {/* Main Color Fill */}
      <Pixel x={4} y={6} color={mainColor} />
      <Pixel x={5} y={5} color={mainColor} />
      <Pixel x={6} y={4} color={mainColor} />
      <Pixel x={7} y={3} color={mainColor} />
      <Pixel x={8} y={3} color={mainColor} />
      <Pixel x={8} y={4} color={mainColor} />
      <Pixel x={8} y={5} color={mainColor} />
      <Pixel x={8} y={6} color={mainColor} />
      <Pixel x={7} y={6} color={mainColor} />
      <Pixel x={6} y={6} color={mainColor} />
      <Pixel x={5} y={6} color={mainColor} />

      {/* Inner Color Fill */}
      <Pixel x={6} y={5} color={innerColor} />
      <Pixel x={7} y={4} color={innerColor} />
      <Pixel x={7} y={5} color={innerColor} />

      {/* Right Ear */}
      {/* Outline */}
      <Pixel x={11} y={6} color={outlineColor} />
      <Pixel x={12} y={5} color={outlineColor} />
      <Pixel x={13} y={4} color={outlineColor} />
      <Pixel x={14} y={3} color={outlineColor} />
      <Pixel x={15} y={2} color={outlineColor} />
      <Pixel x={16} y={2} color={outlineColor} />
      <Pixel x={17} y={3} color={outlineColor} />
      <Pixel x={17} y={4} color={outlineColor} />
      <Pixel x={17} y={5} color={outlineColor} />
      <Pixel x={17} y={6} color={outlineColor} />
      <Pixel x={16} y={6} color={outlineColor} />
      <Pixel x={15} y={7} color={outlineColor} />
      <Pixel x={15} y={7} color={outlineColor} />

      {/* Main Color Fill */}
      <Pixel x={12} y={6} color={mainColor} />
      <Pixel x={13} y={5} color={mainColor} />
      <Pixel x={14} y={4} color={mainColor} />
      <Pixel x={15} y={3} color={mainColor} />
      <Pixel x={16} y={3} color={mainColor} />
      <Pixel x={16} y={4} color={mainColor} />
      <Pixel x={16} y={5} color={mainColor} />
      <Pixel x={16} y={6} color={mainColor} />
      <Pixel x={15} y={6} color={mainColor} />
      <Pixel x={14} y={6} color={mainColor} />
      <Pixel x={13} y={6} color={mainColor} />

      {/* Inner Color Fill */}
      <Pixel x={14} y={5} color={innerColor} />
      <Pixel x={15} y={4} color={innerColor} />
      <Pixel x={15} y={5} color={innerColor} />

      {/* Headband */}
      {/* Horizontal Part - Fill */}
      <Pixel x={4} y={6} color={outlineColor} />
      <Pixel x={5} y={6} color={outlineColor} />
      <Pixel x={6} y={6} color={outlineColor} />
      <Pixel x={7} y={6} color={outlineColor} />
      <Pixel x={8} y={6} color={outlineColor} />
      <Pixel x={9} y={6} color={outlineColor} />
      <Pixel x={10} y={6} color={outlineColor} />
      <Pixel x={11} y={6} color={outlineColor} />
      <Pixel x={12} y={6} color={outlineColor} />
      <Pixel x={13} y={6} color={outlineColor} />
      <Pixel x={14} y={6} color={outlineColor} />
      <Pixel x={15} y={6} color={outlineColor} />
      <Pixel x={16} y={6} color={outlineColor} />
    </View>
  );
};
