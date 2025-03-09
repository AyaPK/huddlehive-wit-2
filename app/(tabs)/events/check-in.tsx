import { StyleSheet, TextInput, Pressable, View, KeyboardAvoidingView, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { events } from './index';
import React from 'react';
import { useBeeHealth } from '@/store/beeHealth';
import { Toast } from '@/components/Toast';
import { PageLayout } from '@/components/PageLayout';
import { useEventStreak } from '@/hooks/useEventStreak';

// Match the default health bonus to half of the default health (50)
const BASE_HEALTH_BONUS = 25;
const MAX_STREAK_BONUS = 25; // Cap streak bonus at 25 (same as base)

export default function CheckInScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [code, setCode] = React.useState('');
  const [error, setError] = React.useState('');
  const [showToast, setShowToast] = React.useState(false);
  const { increaseHealth } = useBeeHealth();
  const { markEventAttendance, currentStreak, hasAttendedEvent } = useEventStreak();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <PageLayout>
        <ThemedText style={styles.errorText}>Event not found</ThemedText>
      </PageLayout>
    );
  }

  const alreadyCheckedIn = hasAttendedEvent(event.id);
  const streakBonus = Math.min(currentStreak * 5, MAX_STREAK_BONUS);
  const totalBonus = BASE_HEALTH_BONUS + streakBonus;

  const handleCheckIn = () => {
    if (alreadyCheckedIn) {
      setError('You have already checked in to this event!');
      return;
    }

    if (code.toUpperCase() === event.checkInCode) {
      markEventAttendance(event.id, 'attended');
      increaseHealth(totalBonus);
      setShowToast(true);
      setError('');
      setTimeout(() => {
        router.back();
      }, 2000);
    } else {
      setError('Incorrect check-in code. Please try again.');
    }
  };

  return (
    <PageLayout>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <View style={styles.card}>
          <ThemedText style={styles.title}>Check In to {event.title}</ThemedText>
          
          {alreadyCheckedIn ? (
            <View style={styles.alreadyCheckedIn}>
              <ThemedText style={styles.successText}>
                ✅ You've already checked in to this event!
              </ThemedText>
              <Pressable 
                style={[styles.button, styles.backButton]}
                onPress={() => router.back()}
              >
                <ThemedText style={styles.buttonText}>Go Back</ThemedText>
              </Pressable>
            </View>
          ) : (
            <>
              <ThemedText style={styles.description}>
                Please enter the check-in code provided by the event organizer.
              </ThemedText>
              
              <View style={styles.bonusInfo}>
                <ThemedText style={styles.bonusTitle}>Health Bonus</ThemedText>
                <View style={styles.bonusRow}>
                  <ThemedText style={styles.bonusText}>Base Bonus</ThemedText>
                  <ThemedText style={styles.bonusValue}>+{BASE_HEALTH_BONUS}</ThemedText>
                </View>
                {currentStreak > 0 && (
                  <View style={styles.bonusRow}>
                    <ThemedText style={styles.bonusText}>
                      Streak Bonus ({currentStreak} 🔥)
                    </ThemedText>
                    <ThemedText style={styles.bonusValue}>+{streakBonus}</ThemedText>
                  </View>
                )}
                <View style={[styles.bonusRow, styles.totalRow]}>
                  <ThemedText style={styles.totalText}>Total Bonus</ThemedText>
                  <ThemedText style={styles.totalValue}>+{totalBonus}</ThemedText>
                </View>
              </View>
              
              <TextInput
                style={styles.input}
                value={code}
                onChangeText={setCode}
                placeholder="Enter check-in code (e.g. HAPPY-HACKY-PARTY)"
                placeholderTextColor="#666666"
                autoCapitalize="characters"
              />
              
              {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}
              
              <Pressable style={styles.button} onPress={handleCheckIn}>
                <ThemedText style={styles.buttonText}>Check In</ThemedText>
              </Pressable>
            </>
          )}
        </View>
      </KeyboardAvoidingView>

      {showToast && (
        <Toast
          message={`🐝 Success! +${totalBonus} health points${currentStreak > 0 ? ` (${currentStreak} event streak! 🔥)` : ''}`}
          onHide={() => setShowToast(false)}
        />
      )}
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  keyboardAvoid: {
    flex: 1,
    width: '100%',
  },
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
    marginBottom: 16,
    color: '#2C3333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
    color: '#666666',
    textAlign: 'center',
  },
  alreadyCheckedIn: {
    alignItems: 'center',
    gap: 20,
  },
  successText: {
    fontSize: 18,
    color: '#34C759',
    textAlign: 'center',
  },
  bonusInfo: {
    backgroundColor: '#F2F2F7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  bonusTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3333',
    marginBottom: 12,
  },
  bonusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  bonusText: {
    fontSize: 14,
    color: '#666666',
  },
  bonusValue: {
    fontSize: 14,
    color: '#34C759',
    fontWeight: '600',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    marginTop: 8,
    paddingTop: 8,
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3333',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34C759',
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#8E8E93',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    color: '#FF3B30',
    marginBottom: 16,
    textAlign: 'center',
  },
});
