import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import AccessoriesScreen from './app/screens/AccessoriesScreen';
import EventsScreen from './app/screens/EventsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Accessories':
                iconName = focused ? 'gift' : 'gift-outline';
                break;
              case 'Events':
                iconName = focused ? 'calendar' : 'calendar-outline';
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
        <Tab.Screen name="Accessories" component={AccessoriesScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
