import React from 'react';
import { useNavigate } from 'react-router-native';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { StreamChat } from 'stream-chat';
import { apiKeys } from './config';


const Home = (): JSX.Element => {

    const client = StreamChat.getInstance(apiKeys.API_KEY);

    return (
        <View>
            <Text>
                Home
            </Text>
        </View>
    );
}



export default Home;
