import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Font, Theme } from '../constants';

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <BlurView intensity={80} style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label       = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabBarItem, isFocused ? styles.tabBarItemFocused : null]}
          >
            {
                //<Icon name={label.toLowerCase()} size={24} color={isFocused ? '#fff' : '#aaa'} />
            }
            <Text style={{fontSize: 14, fontFamily: Font.medium, color: isFocused ? Theme.WHITE_COLOR : Theme.DARK_COLOR }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarContainer: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: Theme.DARK_COLOR,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden'
  },
  tabBarItem: {
    alignItems: 'center',
  },
  tabBarItemFocused: {
    backgroundColor: '#444',
    borderRadius: 30,
    paddingHorizontal: 10,
  },
});
