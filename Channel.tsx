import React, { useContext, useEffect, useState } from "react";
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useLocation, useNavigate } from "react-router-native";
import { DefaultGenerics, StreamChat } from "stream-chat";
import { apiKeys } from "./config";
import { channel, create_channel, register } from "./stylesheet";
import { ChannelContext, UserContext } from "./Context";


const Channel = (props: any): JSX.Element => {

    let navigate = useNavigate();
    const { channelId, setChannelId } = useContext(ChannelContext);
    const [currentChannel, setCurrentChannel] = useState<any>(null);
    const [message, setMessage] = useState("");

    const client: StreamChat<DefaultGenerics> = StreamChat.getInstance(apiKeys.API_KEY);

    const queryChannel = async (): Promise<any> => {
        const filter = { id: channelId };
        const channel = await client.queryChannels(filter, {});
        return channel;
    }

    useEffect(() => {
        queryChannel().then(
            (result) => {
                setCurrentChannel(result[0]);
                console.log(result[0].data.name);
            }
        ).catch(
            (e) => console.log(e)
        )
    }, []);


    return (
        <>
            <StatusBar backgroundColor={"cyan"} />

            <View style={channel.header}>
                <View style={channel.back}>
                    <TouchableOpacity onPress={() => navigate('/home')}>
                        <Image source={require("./images/back.png")} />
                    </TouchableOpacity>
                </View>
                <View style={channel.title}>
                    <Text style={channel.title_text}>
                        {currentChannel === null ? "" : currentChannel.data.name}
                    </Text>
                </View>
            </View>

            <ScrollView style={channel.messages}>

            </ScrollView>

            <View style={channel.message_box}>
                <TextInput
                    style={channel.input}
                    multiline={true}
                    onChangeText={(newMessage) => setMessage(newMessage)}
                />
                <TouchableOpacity
                    style={channel.send_image

                    }>
                    <Image
                        source={require('./images/send.png')}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Channel;

