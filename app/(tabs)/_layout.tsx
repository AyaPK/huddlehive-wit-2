import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useWindowDimensions, View } from 'react-native';
import { CoinBalance } from '@/components/ui/CoinBalance';
import { useCoinBalance } from '@/context/CoinBalanceContext';
import { BeeFact } from '@/components/BeeFact';
import { ParamListBase } from '@react-navigation/native';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { ThemedText } from '@/components/ThemedText';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { width } = useWindowDimensions();
  const { balance } = useCoinBalance();
  const showLabels = width >= 768;

  const commonHeaderOptions = {
    header: ({ navigation, route, options }: BottomTabHeaderProps) => (
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
          <ThemedText style={{ fontSize: 18, fontWeight: 'bold', minWidth: 80 }}>{options.title}</ThemedText>
          <View style={{ flex: 1, marginHorizontal: 16 }}>
            <BeeFact />
          </View>
          <CoinBalance balance={balance} />
        </View>
      </View>
    ),
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: {
          height: showLabels ? 49 : 64,
          paddingBottom: showLabels ? 0 : 12,
          paddingTop: showLabels ? 0 : 8,
          backgroundColor: '#ffffff',
          borderTopColor: '#e1e1e1',
        },
        tabBarLabelStyle: {
          display: showLabels ? 'flex' : 'none',
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarIconStyle: {
          marginBottom: showLabels ? 0 : 0,
        },
        ...commonHeaderOptions,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: true,
          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons 
              name={focused ? 'home' : 'home-outline'} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="before-event"
        options={{
          title: 'Event Prep',
          headerShown: true,
          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons 
              name={focused ? 'time' : 'time-outline'} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="accessories"
        options={{
          title: 'Accessories',
          headerShown: true,
          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons 
              name={focused ? 'pricetag' : 'pricetag-outline'} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          headerShown: true,
          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons 
              name={focused ? 'cart' : 'cart-outline'} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events',
          headerShown: false,
          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons 
              name={focused ? 'calendar' : 'calendar-outline'} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: true,
          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons 
              name={focused ? 'settings' : 'settings-outline'} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
