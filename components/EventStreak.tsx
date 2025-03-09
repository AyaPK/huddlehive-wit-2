import { View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { useEventStreak } from '@/hooks/useEventStreak';

export function EventStreak() {
  const { currentStreak, bestStreak } = useEventStreak();

  return (
    <View style={styles.container}>
      <View style={styles.streakRow}>
        <View style={styles.streakItem}>
          <ThemedText style={styles.streakValue}>
            {currentStreak} {currentStreak > 0 && '🔥'}
          </ThemedText>
          <ThemedText style={styles.streakLabel}>Current Streak</ThemedText>
        </View>
        <View style={styles.divider} />
        <View style={styles.streakItem}>
          <ThemedText style={styles.streakValue}>
            {bestStreak} ⭐
          </ThemedText>
          <ThemedText style={styles.streakLabel}>Best Streak</ThemedText>
        </View>
      </View>
      {currentStreak > 0 && (
        <ThemedText style={styles.streakMessage}>
          Keep it up! You're on a roll!
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF8E1',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  streakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  streakItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#FFB74D',
    marginHorizontal: 24,
  },
  streakValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF9500',
  },
  streakLabel: {
    fontSize: 14,
    color: '#666666',
  },
  streakMessage: {
    fontSize: 14,
    color: '#FF9500',
    marginTop: 12,
    fontWeight: '500',
  },
});
