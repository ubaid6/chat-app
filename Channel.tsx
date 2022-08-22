import React, { useContext } from "react";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import { useLocation, useNavigate } from "react-router-native";
import { DefaultGenerics, StreamChat } from "stream-chat";
import { apiKeys } from "./config";
import { create_channel, register } from "./stylesheet";
import { ChannelContext, UserContext } from "./Context";


const Channel = (props: any): JSX.Element => {

    let navigate = useNavigate();
    const {channelId, setChannelId} = useContext(ChannelContext);
    console.log(channelId);
 
    const client: StreamChat<DefaultGenerics> = StreamChat.getInstance(apiKeys.API_KEY);

    return (
        <>
            <StatusBar backgroundColor={"cyan"} />
            <View style={register.title}>
                <TouchableOpacity onPress={() => navigate('/home')}>
                    <Image style={create_channel.back} source={require("./images/back.png")} />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Channel;

