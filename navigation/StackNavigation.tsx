import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavigation from "./BottomNavigation";
import MusicDetailScreen from "../screens/MusicDetailScreen";
import FilterGenreModal from "../screens/FilterGenreModal";

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="TabNavigation" component={BottomNavigation} />
            <Stack.Screen name="MusicDetailScreen" component={MusicDetailScreen} />
            <Stack.Screen
              name="FilterGenreModal" component={FilterGenreModal} options={{
                presentation: 'modal',
              }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigation;