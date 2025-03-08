import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedView } from './ThemedView';
import { GardenBackground } from './GardenBackground';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <ThemedView style={styles.container}>
      <GardenBackground />
      <View style={styles.content}>
        {children}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
