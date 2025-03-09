import { StyleSheet, View } from 'react-native';
import { PageLayout } from '@/components/PageLayout';
import { ThemedText } from '@/components/ThemedText';
import { BeeHealthBar } from '@/components/BeeHealthBar';
import { AnimatedPixelBee } from '@/components/AnimatedPixelBee';
import { useBeeHealth } from '@/store/beeHealth';
import { GardenBackground } from '@/components/GardenBackground';
import React from 'react';
import { useInventory } from '@/context/InventoryContext';

export default function HomeScreen() {
  const { selectedSkin, selectedAccessory } = useInventory();
  const { currentHealth, maxHealth } = useBeeHealth();



  return (
    <PageLayout>
      <View style={styles.container}>
        <ThemedText style={styles.title}>Welcome to the Buddee Network!</ThemedText>
        <View style={styles.beeContainer}>
          <AnimatedPixelBee skin={selectedSkin} accessory={selectedAccessory} />
        </View>
        <View style={styles.healthSection}>
          <ThemedText style={styles.healthTitle}>Buddee Health</ThemedText>
          <BeeHealthBar currentHealth={currentHealth} maxHealth={maxHealth} />
        </View>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C3333',
    marginBottom: 16,
  },
  beeContainer: {
    alignItems: 'center',
  },
  healthSection: {
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    maxWidth: 300,
  },
  healthTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3333',
  },
  healthText: {
    fontSize: 16,
    color: '#666666',
  },
});
