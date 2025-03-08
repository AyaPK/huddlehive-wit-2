import { Stack } from 'expo-router';
import React from 'react';

type EventContextType = {
  checkedInEvents: Set<string>;
  updateCheckedInStatus: (eventId: string, isCheckedIn: boolean) => void;
};

export const EventContext = React.createContext<EventContextType>({
  checkedInEvents: new Set(),
  updateCheckedInStatus: () => {},
});

export default function EventsLayout() {
  const [checkedInEvents, setCheckedInEvents] = React.useState<Set<string>>(new Set());

  const updateCheckedInStatus = (eventId: string, isCheckedIn: boolean) => {
    setCheckedInEvents(prev => {
      const newSet = new Set(prev);
      if (isCheckedIn) {
        newSet.add(eventId);
      } else {
        newSet.delete(eventId);
      }
      return newSet;
    });
  };

  return (
    <EventContext.Provider value={{ checkedInEvents, updateCheckedInStatus }}>
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
            title: 'Check In',
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
    </EventContext.Provider>
  );
}
