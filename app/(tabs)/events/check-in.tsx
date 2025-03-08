import { StyleSheet, TextInput, Pressable, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { events } from './index';
import React from 'react';
import { useBeeHealth } from '@/store/beeHealth';
import { Toast } from '@/components/Toast';
import { PageLayout } from '@/components/PageLayout';

export default function CheckInScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [code, setCode] = React.useState('');
  const [error, setError] = React.useState('');
  const [showToast, setShowToast] = React.useState(false);
  const { increaseHealth } = useBeeHealth();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <PageLayout>
        <ThemedText style={styles.errorText}>Event not found</ThemedText>
      </PageLayout>
    );
  }

  const handleCheckIn = () => {
    if (code.toUpperCase() === event.checkInCode) {
      increaseHealth(25);
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
      <View style={styles.card}>
        <ThemedText style={styles.title}>Check In to {event.title}</ThemedText>
        <ThemedText style={styles.description}>
          Please enter the check-in code provided by the event organizer.
        </ThemedText>
        
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
      </View>

      {showToast && (
        <Toast
          message="🐝 Your Buddee gained +25 health points!"
          onHide={() => setShowToast(false)}
        />
      )}
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
