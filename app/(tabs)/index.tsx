import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { PixelBeeImage } from '@/components/PixelBeeImage';

export default function IndexScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>Welcome to HuddleHive!</ThemedText>
      <View style={styles.beeContainer}>
        <PixelBeeImage />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 20,
  },
  beeContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
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
