import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { PageLayout } from '@/components/PageLayout';
import { EventPrepJourney } from '@/components/EventPrepJourney';
import { EventStreak } from '@/components/EventStreak';

export default function BeforeEventScreen() {
  return (
    <PageLayout>
      <View style={styles.container}>
        <EventStreak />
        <ThemedText style={styles.title}>Event Preparation</ThemedText>
        <ThemedText style={styles.subtitle}>
          Complete these tasks to prepare for your event
        </ThemedText>
        <EventPrepJourney />
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
  },
});
