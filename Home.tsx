import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Channel, DefaultGenerics, StreamChat } from 'stream-chat';
import { apiKeys } from './config';
import { home, register } from './stylesheet';


const Home = (): JSX.Element => {

    const [channels, setChannels] = useState<Array<any>>([]);
    const [isChannelsQueried, channelsQueried] = useState<boolean>(false);
    let navigate = useNavigate();

    const client: StreamChat<DefaultGenerics> = StreamChat.getInstance(apiKeys.API_KEY);

    const createChannel = () : void => {
        navigate('/create-channel');
    }


    const queryChannels = async (): Promise<any> => {
        const channelList = await client.queryChannels({});
        return channelList;
    }

    queryChannels().then(
        (result) => {
            if (isChannelsQueried)
                return;
            setChannels(result);
            channelsQueried(true);
            return;
        }
    ).then(
        () => console.log("channels set")
    ).catch(
        (e) => console.log(e)
    );

    return (
        <>
            <View>
                <TouchableOpacity style={register.submit} onPress={createChannel}>
                    <Text>
                        Make Channel
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={home.channels}>
                <Text>
                    {channels.length === 0 ? "Undefined" : channels.map((channel) => channel.data.name)}
                </Text>
            </ScrollView>
        </>
    );
}



export default Home;
