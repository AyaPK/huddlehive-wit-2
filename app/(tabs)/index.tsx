import { StyleSheet, View, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';
import { AnimatedPixelBee } from '@/components/AnimatedPixelBee';
import { BeeHealthBar } from '@/components/BeeHealthBar';
import { useBeeHealth } from '@/store/beeHealth';
import { Toast } from '@/components/Toast';
import { GardenBackground } from '@/components/GardenBackground';
import { PageLayout } from '@/components/PageLayout';
import React from 'react';
import { useInventory } from '@/context/InventoryContext';

export default function IndexScreen() {
  const { currentHealth, maxHealth, resetHealth } = useBeeHealth();
  const [showToast, setShowToast] = React.useState(false);
  const { selectedSkin, selectedAccessory } = useInventory();
  

  const handleReset = () => {
    resetHealth();
    setShowToast(true);
  };

  return (
    <PageLayout>
      <GardenBackground />
      <View style={styles.content}>
        <ThemedText style={styles.title}>Welcome to the Buddee network!</ThemedText>
        <View style={styles.beeContainer}>
          <View style={styles.beeWrapper}>
            <AnimatedPixelBee skin={selectedSkin} accessory={selectedAccessory} />
            <BeeHealthBar currentHealth={currentHealth} maxHealth={maxHealth} />
            <Pressable style={styles.resetButton} onPress={handleReset}>
              <ThemedText style={styles.resetButtonText}>Reset Health</ThemedText>
            </Pressable>
          </View>
        </View>
      </View>

      {showToast && (
        <Toast
          message="🐝 Bee health reset to default!"
          onHide={() => setShowToast(false)}
        />
      )}
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    padding: 20,
  },
  beeContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
  },
  beeWrapper: {
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2C3333',
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
