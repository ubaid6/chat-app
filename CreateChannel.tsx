import React, { useEffect } from 'react';
import {
    BackHandler,
    Image,
    StatusBar,
    Text,
    Touchable,
    TouchableOpacity,
    View
} from 'react-native';
import { useNavigate } from 'react-router-native';
import { DefaultGenerics, StreamChat } from 'stream-chat';
import { apiKeys } from './config';
import { createChannel, register } from './stylesheet';


const CreateChannel = (): JSX.Element => {
    let navigate = useNavigate();



    return (<>
        <StatusBar backgroundColor={"cyan"} />
        <View style={register.title}>
            <TouchableOpacity onPress={() => navigate('/home')}>
                <Image style={createChannel.back} source={require("./images/back.png")} />
            </TouchableOpacity>
        </View>
    </>);
}

export default CreateChannel;