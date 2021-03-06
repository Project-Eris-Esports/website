import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import Branding from '../Utilities/Color';
import { Link } from '@react-navigation/native';

const ContactScreen = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            Name: '',
            Email: '',
            Pronouns: '',
            Subject: '',
            Message: '',
        }
    });
    const onSubmit = data => console.log(data);
    return (
        <ImageBackground source={ require('../assets/images/ErisBackground.jpg') } style={styles.container}>
            <View>

            <Text style={styles.title}>Contact Us</Text>

            {/* Name Field */}
            <Text style={styles.label}>Name:*</Text>
                <Controller 
                control={control}
                rules={{
                    maxLength: 100,
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    placeholder='John Doe'
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    />
                )}
                name="Name"
                />

            {errors.Name && <Text style={styles.errors}>This is required.</Text>}

            {/* Email Field */}

            <Text style={styles.label}>Email:*</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder='email@email.email'
                        style={styles.input}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                    />
                )}
                name="Email"
                />

                {errors.Email && <Text style={styles.errors}>Please enter a vaild email.</Text>}
                
                {/* Pronouns */}

                <Text style={styles.label}>Pronouns:*</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        pattern: /[A-Z]\w\/[A-Z]\w/i,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder='abc/abc'
                            style={styles.input}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                        />
                    )}
                    name="Pronouns"
                    />

                    {errors.Pronouns && <Text style={styles.errors}>Please enter vaild pronouns.</Text>}

                {/* Subject */}

                <Text style={styles.label}>Subject:*</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder='Subject'
                            style={styles.input}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                        />
                    )}
                    name="Subject"
                    />

                    {errors.Subject && <Text style={styles.errors}>Please enter vaild Subject.</Text>}

                {/* Pronouns */}

                <Text style={styles.label}>Message:*</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        pattern: 1000
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            multiline={true}
                            placeholder='Message'
                            style={styles.message}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                        />
                    )}
                    name="Message"
                    />

                    {errors.Message && <Text style={styles.errors}>Please enter vaild Message.</Text>}

                    <Button style={styles.btn} title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>


            <View>
                <Text style={styles.title}>Other forms of contact</Text>
            {/* Discord Primary */}
                <Image style={styles.image} source={require('../assets/Images/discord_logo.png')} />
            {/* Twitter */}
                <Image style={styles.image} source={require('../assets/Images/twitter_logo.png')} />
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
    },
    title: {
        fontSize: 25,
        color: Branding.ERIS_WHITE,
        paddingBottom: 15,
    },
    label: {
        fontSize: 15,
        color: Branding.ERIS_WHITE,
    },
    input: {
        backgroundColor: Branding.ERIS_WHITE,
        borderWidth: 1,
        width: 300,
        marginBottom: 5,
        padding: 10,
    },
    placeholder: {
        color: "Black"
    },
    message: {
        backgroundColor: Branding.ERIS_WHITE,
        borderWidth: 1,
        width: 300,
        marginBottom: 10,
        paddingLeft: 15,
        paddingTop: 5,
        paddingBottom: 50,
    },
    errors: {
        color: "red",
        marginBottom: 5,
    },
    btn: {
        backgroundColor: Branding.ERIS_GREEN,
    },
    image: {
        height: 50,
        width: 50,
    },
})

export default ContactScreen;