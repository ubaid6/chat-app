import React from 'react';
import { useNavigate } from 'react-router-native';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { StreamChat } from 'stream-chat';


const Home = (): JSX.Element => {

    const client = StreamChat.getInstance("");

    return (
        <View>
            <Text>
                Home
            </Text>
        </View>
    );
}



export default Home;
