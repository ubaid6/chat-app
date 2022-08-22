import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    ScrollView,
    Image,
    StatusBar,
} from 'react-native';
import { Channel, DefaultGenerics, StreamChat } from 'stream-chat';
import { apiKeys } from './config';
import { create_channel, home, register } from './stylesheet';
import ChannelCard from './ChannelCard';
import { UserContext } from './Context';


const Home = (): JSX.Element => {

    const [channels, setChannels] = useState<Array<any>>([]);
    const [isChannelsQueried, channelsQueried] = useState<boolean>(false);
    let navigate = useNavigate();

    const client: StreamChat<DefaultGenerics> = StreamChat.getInstance(apiKeys.API_KEY);

    const createChannel = (): void => {
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
        }).catch(
            (e) => console.log(e)
        );

    const channelList = channels.map((channel) =>
        <ChannelCard key={channel.id} name={channel.data.name} id={channel.id} />
    );

    return (
        <>
            <StatusBar backgroundColor={"cyan"} />
            <ScrollView style={home.channels}>
                {channelList}
                <TouchableOpacity style={home.image} onPress={createChannel}>
                    <Image source={require('./images/create-chat-icon.png')} />
                </TouchableOpacity>
            </ScrollView>
        </>
    );
}



export default Home;
