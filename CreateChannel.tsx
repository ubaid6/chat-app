import React, { useContext, useEffect, useState } from 'react';
import {
    Image,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { useNavigate } from 'react-router-native';
import { DefaultGenerics, StreamChat } from 'stream-chat';
import { apiKeys } from './config';
import { UserContext } from './Context';
import { create_channel, register } from './stylesheet';
import UserCard from './UserCard';


const CreateChannel = (): JSX.Element => {
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const { user, setUser } = useContext(UserContext);
    const [users, setUsers] = useState<Array<any>>([]);

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
            members: [user],
        });
        await channel.create();
    }


    const getUsers = async (): Promise<any> => {
        const userList = await client.queryUsers({});
        return userList;
    }

    useEffect(() => {
        getUsers().then(
            (result) => setUsers(result.users)
        ).catch(
            (e) => console.log(e)
        );
    }, []);

    const userList: JSX.Element[] = users.map((person) =>
        <UserCard key={person.id} name={person.name} id={person.id} />
    );


    return (
        <>
            <StatusBar backgroundColor={"cyan"} />
            <View style={register.title}>
                <TouchableOpacity onPress={() => navigate('/home')}>
                    <Image style={create_channel.back} source={require("./images/back.png")} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={create_channel.users_text}>
                    Select the users you want to add to your channel
                </Text>
            </View>
            <ScrollView style={create_channel.users}>
                {userList}
            </ScrollView>

            <View style={create_channel.body_view}>
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