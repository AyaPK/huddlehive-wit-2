import { StyleSheet, View, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { AnimatedPixelBee } from '@/components/AnimatedPixelBee';
import { BeeHealthBar } from '@/components/BeeHealthBar';
import { useBeeHealth } from '@/store/beeHealth';
import { Toast } from '@/components/Toast';
import React from 'react';

export default function IndexScreen() {
  const { currentHealth, maxHealth, resetHealth } = useBeeHealth();
  const [showToast, setShowToast] = React.useState(false);

  const handleReset = () => {
    resetHealth();
    setShowToast(true);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Welcome to the Buddee network!</ThemedText>
      <View style={styles.beeContainer}>
        <View style={styles.beeWrapper}>
          <AnimatedPixelBee />
          <BeeHealthBar currentHealth={currentHealth} maxHealth={maxHealth} />
          <Pressable style={styles.resetButton} onPress={handleReset}>
            <ThemedText style={styles.resetButtonText}>Reset Health</ThemedText>
          </Pressable>
        </View>
      </View>

      {showToast && (
        <Toast
          message="🐝 Bee health reset to default!"
          onHide={() => setShowToast(false)}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
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
