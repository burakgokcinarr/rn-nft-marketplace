import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Custom tabbar View
import { CustomTabBar } from '../components'; 

import { Home, AddMarket, Analysis, Profile, Search} from '../screens/tab'

const tabBarGeneralConfiguration = {
    headerShown: true, 
    headerStyle: { 
        backgroundColor: '#211134',
    }, 
    headerTitleStyle: { 
        color: 'white',
        fontSize: 20
    },
    headerShadowVisible: false,
    headerTitleAlign: 'center'
}

const Tab   = createBottomTabNavigator();

export default function TabView() {
    return (
        <Tab.Navigator initialRouteName={"home"} screenOptions={tabBarGeneralConfiguration} tabBar={props => <CustomTabBar {...props}/>} >
            <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Home', title: 'NFT Marketplace'}}/>
            <Tab.Screen name="Analysis" component={Analysis} options={{tabBarLabel: 'Analysis', title: 'Stats'}}/>
            <Tab.Screen name="AddMarket" component={AddMarket} options={{tabBarLabel: 'Add'}}/>
            <Tab.Screen name="Profile" component={Profile} options={{tabBarLabel: 'Profile'}}/>
            <Tab.Screen name="Search" component={Search} options={{tabBarLabel: 'Search'}}/>
        </Tab.Navigator>
    )
}