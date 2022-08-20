import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native';
import { Channel, DefaultGenerics, StreamChat } from 'stream-chat';
import { apiKeys } from './config';
import { register } from './stylesheet';


const Home = (): JSX.Element => {

    const [channels, setChannels] = useState<Array<any>>([]);

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
        const channel = client.channel('messaging', 'newChannel', {
            name: 'My Channel',
        });
        await channel.create();
    }

    const queryChannels = async (): Promise<any> => {
        const channelList = await client.queryChannels({});
        return channelList;
    }

    queryChannels().then(
        (result) => setChannels(result)
    ).then(
        () => console.log("channels set")
    ).catch(
        (e) => console.log(e)
    );

    return (
        <View>
            <TouchableOpacity style={register.submit} onPress={createChannel}>
                <Text>
                    Make Channel
                </Text>
            </TouchableOpacity>
            <Text>
                {channels.length === 0? "Undefined" : channels.map((channel) => channel.data.name)}
            </Text>
        </View>
    );
}



export default Home;
