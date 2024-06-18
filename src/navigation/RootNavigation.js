import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding, TabView } from '../screens';

const themeNav = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#211134',
  }
}

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer theme={themeNav}>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
        <Stack.Screen name="tab" component={TabView} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

