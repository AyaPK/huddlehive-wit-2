import { Stack, useRouter } from 'expo-router';
import { View, Pressable } from 'react-native';
import { useCoinBalance } from '@/context/CoinBalanceContext';
import { CoinBalance } from '@/components/ui/CoinBalance';
import { BeeFact } from '@/components/BeeFact';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';

export default function EventsLayout() {
  const { balance } = useCoinBalance();
  const router = useRouter();
  
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
        header: ({ route, options, back }) => {
          const showBeeFact = route.name === 'index';
          
          return (
            <View style={{ 
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderBottomColor: '#e1e1e1'
            }}>
              <View style={{ 
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingVertical: 12,
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', minWidth: 80 }}>
                  {back && (
                    <Pressable 
                      onPress={() => router.back()}
                      style={{ marginRight: 8 }}
                    >
                      <Ionicons name="chevron-back" size={24} color="#007AFF" />
                    </Pressable>
                  )}
                  <ThemedText style={{ fontSize: 18, fontWeight: 'bold' }}>{options.title || route.name}</ThemedText>
                </View>
                {showBeeFact ? (
                  <View style={{ flex: 1, marginHorizontal: 16 }}>
                    <BeeFact />
                  </View>
                ) : (
                  <View style={{ flex: 1 }} />
                )}
                <CoinBalance balance={balance} />
              </View>
            </View>
          );
        },
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
