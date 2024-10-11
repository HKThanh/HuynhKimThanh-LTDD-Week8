import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const screens = [
  {
    name: 'Screen1',
    component: Screen1,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Screen2',
    component: Screen2,
    options: {
      headerShown: false,
    },
  },
]

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
