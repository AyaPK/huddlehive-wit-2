import { StyleSheet, TextInput, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { events } from './index';
import React from 'react';

export default function CheckInScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [code, setCode] = React.useState('');
  const [error, setError] = React.useState('');
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.errorText}>Event not found</ThemedText>
      </ThemedView>
    );
  }

  const handleCheckIn = () => {
    if (code.toUpperCase() === event.checkInCode) {
      // TODO: Handle successful check-in
      setError('');
      router.back();
    } else {
      setError('Incorrect check-in code. Please try again.');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.card}>
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
        
        <Pressable 
          style={[styles.button, styles.checkInButton]}
          onPress={handleCheckIn}
        >
          <ThemedText style={styles.buttonText}>Submit</ThemedText>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#444444',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000000',
    marginBottom: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  checkInButton: {
    backgroundColor: '#34C759',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 14,
    color: '#ff3b30',
    marginBottom: 16,
  },
});
