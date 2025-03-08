import { Stack } from 'expo-router';

export default function EventsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Events',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000000',
          },
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Event Details',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#007AFF',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000000',
          },
        }}
      />
    </Stack>
  );
}
