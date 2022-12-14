import React, { useContext, useEffect, useState } from 'react';
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
    const {user, setUser} = useContext(UserContext);
    let navigate = useNavigate();

    const client: StreamChat<DefaultGenerics> = StreamChat.getInstance(apiKeys.API_KEY);

    const createChannel = (): void => {
        navigate('/create-channel');
    }


    const queryChannels = async (): Promise<any> => {
        const filter = {members: { $in: [user] }}
        const channelList = await client.queryChannels(filter, {});
        return channelList;
    }

    useEffect(() => {
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
    }, []);

    const channelList:JSX.Element[] = channels.map((channel) =>
        <ChannelCard key={channel.id} name={channel.data.name} id={channel.id} />
    );

    return (
        <>
            <StatusBar backgroundColor={"cyan"} />
            <ScrollView style={home.channels}>
                {channelList}
            </ScrollView>
            <TouchableOpacity style={home.create_channel_button} onPress={createChannel}>
                <Image source={require('./images/create-chat-icon.png')} />
            </TouchableOpacity>
        </>
    );
}



export default Home;
