import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const erisBackground = { uri: "data:../assets/ErisBackground" };

const AboutScreen = () => {
    return (
        <ImageBackground source={ require('../assets/images/ErisBackground.jpg') } style={styles.BckImg}>
            <View style={styles.container}>
                <Text style={styles.header}>About Project Eris.</Text>
                <Text style={styles.subHeader}>Powered, Driven, and Played by women</Text>
                <Text style={styles.about}>Project Eris was developed by Kyndal "Astraea" Brizendine with the assistance of Jess 
                "JessGOAT" Bolden and in April of 2021. The mission and drive behind Eris is to nurture the women's competitive scene in North 
                America and to bring a high competitive environment with the highest prize pool to date</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    BckImg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        marginLeft: '25%',
        marginRight: '25%',
    },
    header: {
        fontSize: 30,
        fontFamily: "coluna",
        color: '#FFFFFF',
        textAlign: 'center',
    },
    about: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    subHeader: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    }
})

export default AboutScreen;