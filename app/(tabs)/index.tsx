import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { PixelBeeImage } from '@/components/PixelBeeImage';
import { BeeHealthBar } from '@/components/BeeHealthBar';

export default function IndexScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>Welcome to HuddleHive!</ThemedText>
      <View style={styles.beeContainer}>
        <View style={styles.beeWrapper}>
          <PixelBeeImage />
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
