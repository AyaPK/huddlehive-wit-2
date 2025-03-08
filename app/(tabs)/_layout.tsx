import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useWindowDimensions } from 'react-native';

export default function TabLayout() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

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

          return <Ionicons name={iconName as any} size={isSmallScreen ? 24 : 20} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: !isSmallScreen,
        tabBarStyle: {
          height: isSmallScreen ? 64 : 50,
          paddingBottom: isSmallScreen ? 12 : 0,
          paddingTop: isSmallScreen ? 8 : 0,
        },
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
