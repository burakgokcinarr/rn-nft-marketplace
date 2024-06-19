import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding, TabView } from '../screens';
import { Theme } from '../constants';

const themeNav = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Theme.CARD_BG_COLOR,
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

