import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

import AllMusicScreen from "../screens/AllMusicsScreen";
import MyMusicScreen from "../screens/MyMusicScreen";
import Colors from "../constants/Colors";

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();

    const setIcons = (screenName: string, focused: boolean, size: number, color: string) => {
        let iconName= '';
        switch(screenName) {
            case 'AllMusicScreen':
                iconName = focused ? 'search' : 'search-outline';
                break;
            case 'MyMusicScreen':
                iconName = focused ? 'heart' : 'heart-outline';
                break;
        }
        
        return <Icon name={iconName} size={size} color={color} />;
    }

    return (
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: true,
            tabBarIcon: ({ focused, size, color }) => setIcons(route.name, focused, size, color),
            tabBarActiveTintColor: Colors.primary500,
            tabBarInactiveTintColor: Colors.primary100
        })}>
            <Tab.Screen name="AllMusicScreen" component={AllMusicScreen} options={{
                title: 'All Music'
            }} />
            <Tab.Screen name="MyMusicScreen" component={MyMusicScreen} options={{
                title: 'My Music'
            }} />
        </Tab.Navigator>
    )
}

export default BottomNavigation;