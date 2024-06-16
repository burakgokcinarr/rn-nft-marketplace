import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Custom tabbar View
//import TabBar from '../components/TabBar'; 

import { Home, AddMarket, Analysis, Profile, Search} from '../screens/tab'

const Tab   = createBottomTabNavigator();

export default function TabView() {
    return (
        <Tab.Navigator initialRouteName={"home"} screenOptions={{headerShown: false}} /*tabBar={props => <TabBar {...props}/>}*/ >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Analysis" component={Analysis} />
            <Tab.Screen name="AddMarket" component={AddMarket} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    )
}