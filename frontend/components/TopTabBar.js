import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeScreen from '../Pages/Home';
import AboutScreen from '../Pages/About';
import ContactScreen from '../Pages/Contact';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                Style: { marginTop: insets.top }
            }}
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarItemStyle: { width: 100 },
                tabBarStyle: { backgroundColor: "#ABEDEC" },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarLabel: "Home" }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{ tabBarLabel: "About" }}
            />
            <Tab.Screen
                name="Contact"
                component={ContactScreen}
                options={{ tabBarLabel: "Contact" }}
            />
        </Tab.Navigator>
    )
}

export default function topNavBar() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}