import { StyleSheet, View, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { PageLayout } from '@/components/PageLayout';

export default function SettingsScreen() {
  return (
    <PageLayout>
      <View style={styles.card}>
        <ThemedText style={styles.title}>Settings</ThemedText>
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
          <ThemedText style={styles.sectionTitle}>About</ThemedText>
          <ThemedText style={styles.version}>Version 1.0.0</ThemedText>
        </View>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 16,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#2C3333',
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#2C3333',
  },
  option: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  version: {
    color: '#666666',
    fontSize: 14,
  },
});
