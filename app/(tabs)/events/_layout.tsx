import { Stack } from 'expo-router';

export default function EventsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Events',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#007AFF',
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Event Details',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#007AFF',
        }}
      />
      <Stack.Screen
        name="check-in"
        options={{
          title: 'Event Check-In',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#007AFF',
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
