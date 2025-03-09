import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import beeFacts from '@/constants/beeFacts';

export function BeeFact() {
  const [fact] = React.useState(() => {
    const randomIndex = Math.floor(Math.random() * beeFacts.length);
    return beeFacts[randomIndex];
  });

  return (
    <ThemedText style={styles.text} numberOfLines={1}>{fact}</ThemedText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 18,
    textAlign: 'center',
  },
});
