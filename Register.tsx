import React, { useContext, useState } from 'react';
import { channel, register } from './stylesheet';
import { DefaultGenerics, StreamChat } from 'stream-chat';
import {
    StatusBar,
    Text,
    View,
    TextInput,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { useNavigate } from 'react-router-native';
import { UserContext } from './Context';
import { apiKeys } from './config';



const Register = (): JSX.Element => {

    const { user, setUser } = useContext(UserContext);
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    let navigate = useNavigate();


    const registerUsername = (): void => {
        if (name.length === 0) {
            console.log("Please enter a valid name");
            nameAlert();
        }
        else {
            console.log("Name entered: " + name);
            setUser(name.toLowerCase());
            connectClient(name, imageUrl).then(
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

const connectClient = async (username: string, imageUrl: string): Promise<any> => {
    const client: StreamChat<DefaultGenerics> = StreamChat.getInstance(apiKeys.API_KEY);

    await client.connectUser(
        {
            id: username.toLowerCase(),
            name: username,
            image: imageUrl.length === 0 ?
                "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" :
                imageUrl,
        },
        client.devToken(username.toLowerCase()),
    );

}


export default Register;