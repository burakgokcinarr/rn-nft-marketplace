import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Custom tabbar View
import { CustomTabBar } from '../components'; 

import { Home, AddMarket, Analysis, Profile, Search} from '../screens/tab'

const Tab   = createBottomTabNavigator();

export default function TabView() {
    return (
        <Tab.Navigator initialRouteName={"home"} screenOptions={{headerShown: false}} tabBar={props => <CustomTabBar {...props}/>} >
            <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Home'}}/>
            <Tab.Screen name="Analysis" component={Analysis} options={{tabBarLabel: 'Analysis'}}/>
            <Tab.Screen name="AddMarket" component={AddMarket} options={{tabBarLabel: 'Add'}}/>
            <Tab.Screen name="Profile" component={Profile} options={{tabBarLabel: 'Profile'}}/>
            <Tab.Screen name="Search" component={Search} options={{tabBarLabel: 'Search'}}/>
        </Tab.Navigator>
    )
}