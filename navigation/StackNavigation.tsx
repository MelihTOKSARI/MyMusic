import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavigation from "./BottomNavigation";
import MusicDetailScreen from "../screens/MusicDetailScreen";

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="TabNavigation" component={BottomNavigation} />
            <Stack.Screen name="MusicDetailScreen" component={MusicDetailScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation;