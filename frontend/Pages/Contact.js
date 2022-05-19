import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useForm, Controller } from "react-hook-form";

// export default function App() {
    // const { control, handleSubmit, formState: { errors } } = useForm({
    //     defaultValues: {
    //         fistName: '',
    //         lastName: ''
    //     }
    // });
    // const onSubmit = data => console.log(data);

//     return (
//         <View>
//             <Controller 
//             control={control}
//             rules={{
//                 required: true,
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//                 <TextInput
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 />
//             )}
//             name="First Name"
//             />

//             {errors.firstName && <Text>This is required.</Text>}

//             <Controller
//                 control={control}
//                 rules={{
//                     maxLength: 100,
//                 }}
//                 render={({ field: { onChange, onBlur, value } }) => (
//                     <TextInput
//                         style={styles.input}
//                         onBlur={onBlur}
//                         onChange={onChange}
//                         value={value}
//                     />
//                 )}
//                 name="lastName"
//                 />

//                 <Button title="Submit" onPress={handleSubmit(onSubmit)} />
//         </View>
//     );
// }

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

                    <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
    label: {
        fontSize: 15,
        color: "#FFFFFF"
    },
    // contact: {
    //     color: '#FFFFFF',
    // },
    input: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        width: 300,
        marginBottom: 5,
        padding: 10,
    },
    placeholder: {
        color: "Black"
    },
    message: {
        backgroundColor: "#FFFFFF",
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
    }
})

export default ContactScreen;