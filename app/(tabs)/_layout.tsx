import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'index':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'accessories':
              iconName = focused ? 'gift' : 'gift-outline';
              break;
            case 'events':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case 'settings':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'help';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home'
        }}
      />
      <Tabs.Screen
        name="accessories"
        options={{
          title: 'Accessories'
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events'
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings'
        }}
      />
    </Tabs>
  );
}
