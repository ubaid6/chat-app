import React, { type PropsWithChildren } from 'react';
import { useState } from 'react';
import { register } from './stylesheet';
import { StreamChat } from 'stream-chat';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TextInput,
    Alert
} from 'react-native';




export const Register = (): JSX.Element => {

    const [name, setName] = useState("");

    const registerUsername = (): void => {
        if (name === "") {
            console.log("Please enter a valid name");
            nameAlert();
        }
        else
            console.log("Name entered: " + name);
    }

    const nameAlert = (): void => {
        Alert.alert(
            "Invalid name",
            "Please enter a valid name",
            [{
                text: "OK",
            }]
        );
    }

    return (
        <View>
            <StatusBar backgroundColor={"cyan"} />
            <Text style={register.title}>
                Hello! {'\n'}
                Welcome to my Chat App!
            </Text>

            <View style={register.bodyView}>
                <Text style={register.bodyText}>
                    Please enter your name
                </Text>

                <TextInput
                    style={register.bodyInput}
                    onChangeText={newName => setName(newName)}
                />

                <Button
                    title="Submit"
                    onPress={registerUsername}
                />
            </View>

        </View>
    );
}


export default Register;