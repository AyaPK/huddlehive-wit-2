import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { PageLayout } from '@/components/PageLayout';
import { EventPrepJourney } from '@/components/EventPrepJourney';

export default function BeforeEventScreen() {
  return (
    <PageLayout>
      <View style={styles.container}>
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
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2C3333',
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#2C3333',
    marginBottom: 32,
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
