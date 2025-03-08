import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useWindowDimensions } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { width } = useWindowDimensions();
  const showLabels = width >= 768;

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
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'home' : 'home-outline'} 
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
          tabBarIcon: ({ color, focused }) => (
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
          tabBarIcon: ({ color, focused }) => (
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
          tabBarIcon: ({ color, focused }) => (
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
          tabBarIcon: ({ color, focused }) => (
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
