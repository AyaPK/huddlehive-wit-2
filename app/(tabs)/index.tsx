import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { AnimatedPixelBee } from '@/components/AnimatedPixelBee';
import { BeeHealthBar } from '@/components/BeeHealthBar';

export default function IndexScreen() {
  return (
    <ThemedView style={styles.container}>
<<<<<<< HEAD
      <ThemedText style={styles.title}>Welcome to the Buddee network!</ThemedText>
      <View style={styles.beeContainer}>
        <View style={styles.beeWrapper}>
          <AnimatedPixelBee />
=======
      <ThemedText style={styles.title}>Welcome to HuddleHive!</ThemedText>
      <View style={styles.beeContainer}>
        <View style={styles.beeWrapper}>
          <PixelBeeImage variant="large" />
>>>>>>> a516128 (Add events journey)
          <BeeHealthBar currentHealth={75} maxHealth={100} />
        </View>
      </View>
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
  link: {
    marginTop: 16,
  },
  linkText: {
    fontSize: 16,
    color: '#007AFF',
  },
});
