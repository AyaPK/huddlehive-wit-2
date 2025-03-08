import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle, G } from 'react-native-svg';

export function GardenBackground() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { width, height }]}>
      <LinearGradient
        colors={['#87CEEB', '#E0F4FF']}
        style={StyleSheet.absoluteFill}
      />
      <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={StyleSheet.absoluteFill}
      >
        {/* Ground */}
        <Path
          d={`M0 ${height * 0.7} Q ${width / 2} ${height * 0.65} ${width} ${
            height * 0.7
          } L${width} ${height} L0 ${height} Z`}
          fill="#90B77D"
        />

        {/* Flowers */}
        {Array.from({ length: 8 }).map((_, i) => {
          const x = (width / 8) * i + Math.random() * 30;
          const y = height * 0.75 + Math.random() * 50;
          return (
            <G key={i} transform={`translate(${x},${y})`}>
              <Circle r="8" fill="#FFD700" />
              {Array.from({ length: 5 }).map((_, j) => (
                <Circle
                  key={j}
                  r="4"
                  fill="#FFF"
                  cx={Math.cos((j * 2 * Math.PI) / 5) * 10}
                  cy={Math.sin((j * 2 * Math.PI) / 5) * 10}
                />
              ))}
            </G>
          );
        })}

        {/* Grass patches */}
        {Array.from({ length: 15 }).map((_, i) => {
          const x = (width / 15) * i + Math.random() * 20;
          const y = height * 0.75 + Math.random() * 40;
          return (
            <Path
              key={i}
              d={`M${x} ${y} Q${x - 5} ${y - 15} ${x} ${y - 20} Q${x + 5} ${
                y - 15
              } ${x} ${y}`}
              fill="#42855B"
              stroke="#42855B"
              strokeWidth="2"
            />
          );
        })}

        {/* Clouds */}
        {Array.from({ length: 3 }).map((_, i) => {
          const x = (width / 3) * i + 50;
          const y = height * 0.2;
          return (
            <G key={i} transform={`translate(${x},${y})`}>
              <Circle r="20" fill="#FFF" opacity={0.8} />
              <Circle r="15" fill="#FFF" opacity={0.8} cx="20" cy="-5" />
              <Circle r="18" fill="#FFF" opacity={0.8} cx="35" cy="5" />
            </G>
          );
        })}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
