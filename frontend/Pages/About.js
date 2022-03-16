import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>About Project Eris.</Text>
            <Text>Project Eris was developed by Kyndal "Astraea" Brizendine with the assistance of Jess 
                "JessGOAT" Bolden and SH Esports in April of 2021</Text>
            <Text>The mission and drive behind Eris is to nurture the women's competitive scene in North 
                America and to bring a high competitive environment with the highest prize pool to date</Text>
            <Text>Powered, Driven, and Played by women</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 30,
        fontFamily: "coluna",
    }
})

export default AboutScreen;