import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function HomeScreen() {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Text>Home Screen</Text>
        </View>
    )
}

function AboutScreen() {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Text>About Screen</Text>
        </View>
    )
}

function ContactScreen() {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Text>Contact Screen</Text>
        </View>
    )
}
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#e91e63",
                labelStyle: { fontSize: 12 },
                Style: { backgroundColor: "Red", marginTop: insets.top }
            }}>
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