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
    const [selectedUsers, setSelectedUsers] = useState<Array<any>>([]);

    const client: StreamChat<DefaultGenerics> = StreamChat.getInstance(apiKeys.API_KEY);

    const createChannel = (): void => {

        const makeChannel = async (): Promise<any> => {
            const channel = client.channel('messaging', name.toLowerCase(), {
                name: name,
                members: [user],
            });
            await channel.create();
        }
    

        makeChannel().then(
            (result: any) => console.log("Channel created")
        )
            .catch(
                (e) => console.log(e)
            );
    }


    const getUsers = async (): Promise<any> => {
        const userList = await client.queryUsers({});
        return userList;
    }

    const userPress = (person:any): void => {
        if (selectedUsers.includes(person)) {
            let filteredUsers = selectedUsers.filter((user) => person.id !== user.id) ;
            setSelectedUsers([...filteredUsers]);
        }
        else setSelectedUsers([...selectedUsers, person]);

        return;
    }

    useEffect(() => {
        getUsers().then(
            (result) => {
                let filteredResult = result.users.filter((person: any) => person.id !== user);
                setUsers([...filteredResult]);
            }
        ).catch(
            (e) => console.log(e)
        );
    }, []);


    const userList: JSX.Element[] = users.map((person) =>
        <TouchableOpacity
        style={selectedUsers.includes(person) ? create_channel.user_active : create_channel.user_inactive}
        onPress={() => userPress(person)}
        >
            <UserCard key={person.id} name={person.name} id={person.id} />
        </TouchableOpacity>
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