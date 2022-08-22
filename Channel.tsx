import React, { useContext, useEffect, useState } from "react";
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useLocation, useNavigate } from "react-router-native";
import { DefaultGenerics, StreamChat } from "stream-chat";
import { apiKeys } from "./config";
import { channel, create_channel, register } from "./stylesheet";
import { ChannelContext, UserContext } from "./Context";
import Message from "./Message";



const Channel = (props: any): JSX.Element => {

    let navigate = useNavigate();
    const { channelId, setChannelId } = useContext(ChannelContext);
    const [currentChannel, setCurrentChannel] = useState<any>(null);
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<Array<any>>([]);

    const client: StreamChat<DefaultGenerics> = StreamChat.getInstance(apiKeys.API_KEY);

    const queryChannel = async (): Promise<any> => {
        const filter = { id: channelId };
        const channel = await client.queryChannels(filter, {});
        return channel;
    }

    const sendMessage = async (): Promise<any> => {
        await currentChannel.sendMessage({
            text: message,
        });
    }

    const handleSendMessage = ():void => {
        sendMessage();
        setMessage("");
        return;
    }

    useEffect(() => {
        queryChannel().then(
            (result) => {
                setCurrentChannel(result[0]);
                setMessages(result[0].state.messages);
                return;
            }
        ).catch(
            (e) => console.log(e)
        )
    }, []);

    const messageList:JSX.Element[] = messages.map((msg) =>
        <Message text={msg.text} />
    );

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
                {messageList}
            </ScrollView>

            <View style={channel.message_box}>
                <TextInput
                    style={channel.input}
                    multiline={true}
                    value={message}
                    onChangeText={(newMessage) => setMessage(newMessage)}
                />
                <TouchableOpacity
                    style={channel.send_image}
                    onPress={handleSendMessage}
                >
                    <Image
                        source={require('./images/send.png')}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Channel;

