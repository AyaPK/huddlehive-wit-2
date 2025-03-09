import { StyleSheet, View, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { PageLayout } from '@/components/PageLayout';
import { useEventStreak } from '@/hooks/useEventStreak';
import { useBeeHealth } from '@/store/beeHealth';

export default function SettingsScreen() {
  const { resetToDemo } = useEventStreak();
  const { resetHealth } = useBeeHealth();

  const handleResetDemo = () => {
    resetToDemo();
    resetHealth();
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <View style={styles.section}>
          <ThemedText style={styles.title}>Settings</ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Notifications</ThemedText>
          <Pressable style={styles.option}>
            <ThemedText>Event Reminders</ThemedText>
          </Pressable>
          <Pressable style={styles.option}>
            <ThemedText>Bee Health Updates</ThemedText>
          </Pressable>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Demo Mode</ThemedText>
          <ThemedText style={styles.sectionDescription}>
            Reset your Buddee's health, event streak, and task completion status to their demo values.
            This will set your streak to 2 events and health to 50.
          </ThemedText>
          <Pressable style={styles.button} onPress={handleResetDemo}>
            <ThemedText style={styles.buttonText}>Reset Demo Data</ThemedText>
          </Pressable>
        </View>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    gap: 24,
  },
  section: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 16,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2C3333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3333',
    marginBottom: 16,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  option: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
});
