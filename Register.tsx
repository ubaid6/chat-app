import React, { useContext, useState } from 'react';
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
    Alert,
    TouchableOpacity
} from 'react-native';
import { useNavigate } from 'react-router-native';
import { UserContext } from './UserContext';




const Register = (): JSX.Element => {

    const { user, setUser } = useContext(UserContext);

    const [name, setName] = useState("");
    let navigate = useNavigate();

    const registerUsername = (): void => {
        if (name.length === 0) {
            console.log("Please enter a valid name");
            nameAlert();
        }
        else {
            console.log("Name entered: " + name);
            setUser(name);
            connectClient().then(
                () => console.log("Client connected!")
            ).catch(
                (e) => console.log(e)
            )
            navigate("/home");
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

                <TouchableOpacity
                    style={register.submit}
                    onPress={registerUsername}
                >
                    <Text style={register.bodyText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export const connectClient = async ():Promise<any> => {
    const client = StreamChat.getInstance("");

    await client.connectUser(
        {
            id: 'ubaid',
            name: 'Ubaid',
            image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        },
       client.devToken('ubaid'),
    );

}



export default Register;