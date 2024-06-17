import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Font, Theme } from '../constants';

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <BlurView intensity={90} style={styles.tabBarContainer}>
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
        
        if (index === 2) {
          // Center Button (Add)
          return (
            <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.middleButton}
              >
                <Ionicons name={"add"} size={24} color={isFocused ? Theme.WHITE_COLOR : Theme.DARK_COLOR} />
            </TouchableOpacity>
          );
        }

        let iconName;
        if (route.name === 'Home') {
          iconName = isFocused ? 'home' : 'home';
        } else if (route.name === 'Analysis') {
          iconName = isFocused ? 'analytics' : 'analytics';
        } else if (route.name === 'Profile') {
          iconName = isFocused ? 'people' : 'people';
        } else if (route.name === 'Search') {
          iconName = isFocused ? 'search' : 'search';
        } 

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
            <Ionicons name={iconName} size={24} color={isFocused ? Theme.WHITE_COLOR : Theme.DARK_COLOR} />
            <Text style={{fontSize: 12, fontFamily: Font.medium, color: isFocused ? Theme.WHITE_COLOR : Theme.DARK_COLOR }}>
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
    height: 85,
    backgroundColor: Theme.DARK_COLOR,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'relative'
  },
  tabBarItem: {
    alignItems: 'center',
    padding: 5
  },
  tabBarItemFocused: {
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 5
  },
  middleTabItem: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Theme.GREEN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  middleButton: {
    width: 60,
    height: 60,
    bottom: 40,
    borderRadius: 10,
    backgroundColor: Theme.GREEN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
