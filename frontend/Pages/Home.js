import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';



const HomeScreen = () => {
    return (
        <ImageBackground source={ require('../assets/images/ErisBackground.jpg') } style={styles.container}>
            <Text style={styles.home}>Welcome to the Home Screen</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        color: 'white',
    },
    home: {
        color: 'white',
    }
})

export default HomeScreen;