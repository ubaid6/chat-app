import React, { useEffect, useState } from 'react';
import {
    Image,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { useNavigate } from 'react-router-native';
import { DefaultGenerics, StreamChat } from 'stream-chat';
import { apiKeys } from './config';
import { create_channel, register } from './stylesheet';


const CreateChannel = (): JSX.Element => {
    let navigate = useNavigate();
    const [name, setName] = useState("");
 
    const client: StreamChat<DefaultGenerics> = StreamChat.getInstance(apiKeys.API_KEY);

    const createChannel = (): void => {
        makeChannel().then(
            (result: any) => console.log("Channel created")
        )
            .catch(
                (e) => console.log(e)
            );
    }


    const makeChannel = async (): Promise<any> => {
        const channel = client.channel('messaging', name.toLowerCase(), {
            name: name,
        });
        await channel.create();
    }



    return (
        <>
            <StatusBar backgroundColor={"cyan"} />
            <View style={register.title}>
                <TouchableOpacity onPress={() => navigate('/home')}>
                    <Image style={create_channel.back} source={require("./images/back.png")} />
                </TouchableOpacity>
            </View>
            <View style={register.bodyView}>
                <Text style={register.bodyText}>
                    Enter your channel name
                </Text>
                <TextInput 
                style={register.bodyInput}
                onChangeText={(newName) => setName(newName)}
                />
                <TouchableOpacity
                    style={register.submit}
                    onPress={createChannel}
                >
                    <Text style={register.bodyText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default CreateChannel;