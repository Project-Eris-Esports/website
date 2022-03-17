import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const ContactScreen = () => {
    return (
        <ImageBackground source={ require('../assets/images/ErisBackground.jpg') } style={styles.container}>
            <Text style={styles.contact}>Welcome to the Contact Screen</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    contact: {
        color: '#FFFFFF',
    }
})

export default ContactScreen;