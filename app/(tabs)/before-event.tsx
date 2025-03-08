import { ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { EventPrepJourney } from '@/components/EventPrepJourney';

export default function BeforeEventScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText style={styles.title}>Event Prep Guide</ThemedText>
        <ThemedText style={styles.subtitle}>Follow the journey to prepare for your special day!</ThemedText>
        <EventPrepJourney />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 40,
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
