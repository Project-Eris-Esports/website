import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const erisBackground = { uri: "data:../assets/ErisBackground" };

const AboutScreen = () => {
    return (
        <ImageBackground source={ require('../assets/images/ErisBackground.jpg') } style={styles.container}>
            <Text style={styles.header}>About Project Eris.</Text>
            <Text style={styles.subHeader}>Powered, Driven, and Played by women</Text>
            <Text style={styles.about}>Project Eris was developed by Kyndal "Astraea" Brizendine with the assistance of Jess 
                "JessGOAT" Bolden and SH Esports in April of 2021. The mission and drive behind Eris is to nurture the women's competitive scene in North 
                America and to bring a high competitive environment with the highest prize pool to date</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 30,
        fontFamily: "coluna",
        color: '#FFFFFF',
    },
    about: {
        color: '#FFFFFF',
    },
    subHeader: {
        color: 'white',
        fontSize: 20,
    }
})

export default AboutScreen;