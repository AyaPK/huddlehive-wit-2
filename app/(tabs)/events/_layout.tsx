import { Stack } from 'expo-router';
import { View } from 'react-native';
import { useCoinBalance } from '@/context/CoinBalanceContext';
import { CoinBalance } from '@/components/ui/CoinBalance';

export default function EventsLayout() {
  const { balance } = useCoinBalance();
  
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#007AFF',
        headerRight: () => (
          <View style={{ marginRight: 16 }}>
            <CoinBalance balance={balance} />
          </View>
        ),
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Events',
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Event Details',
        }}
      />
      <Stack.Screen
        name="check-in"
        options={{
          title: 'Event Check-In',
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
