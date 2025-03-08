import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ShopScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Shop</ThemedText>
      <ThemedText style={styles.comingSoon}>Coming Soon!</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  comingSoon: {
    fontSize: 20,
    opacity: 0.7,
  },
});
