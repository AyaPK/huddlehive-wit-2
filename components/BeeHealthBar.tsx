import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

interface BeeHealthBarProps {
  currentHealth: number;
  maxHealth: number;
}

export const BeeHealthBar: React.FC<BeeHealthBarProps> = ({ currentHealth, maxHealth }) => {
  const healthPercentage = (currentHealth / maxHealth) * 100;
  
  const getHealthColor = () => {
    if (healthPercentage > 60) return '#4CAF50'; // Green
    if (healthPercentage > 30) return '#FFC107'; // Yellow
    return '#F44336'; // Red
  };

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <View 
          style={[
            styles.healthFill, 
            { 
              width: `${healthPercentage}%`,
              backgroundColor: getHealthColor(),
            }
          ]} 
        />
      </View>
      <ThemedText style={styles.text}>{currentHealth}/{maxHealth} HP</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 4,
  },
  barContainer: {
    width: 100,
    height: 12,
    backgroundColor: '#333333',
    borderRadius: 6,
    overflow: 'hidden',
  },
  healthFill: {
    height: '100%',
    borderRadius: 6,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
  },
});
