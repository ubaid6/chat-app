import React, { type PropsWithChildren, useState, useEffect } from 'react';
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
import { useNavigate } from 'react-router-native';




const Register = (): JSX.Element => {

    const [name, setName] = useState("");
    const [isValidName, setIsValidName] = useState(false);
    let navigate = useNavigate();

    const registerUsername = (): void => {
        if (name.length === 0) {
            console.log("Please enter a valid name");
            nameAlert();
        }
        else {
            console.log("Name entered: " + name);
            setIsValidName(true);
        }

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

    console.log(isValidName);
    console.log(name);

    useEffect(() => {
        if (isValidName)
            navigate("/home");
    })

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