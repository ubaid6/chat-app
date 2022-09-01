import React, { useContext, useEffect, useRef, useState } from "react";
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router-native";
import { DefaultGenerics, StreamChat } from "stream-chat";
import { apiKeys } from "./config";
import { channel, create_channel, register } from "./stylesheet";
import { ChannelContext, UserContext } from "./Context";
import Message from "./Message";
import { launchImageLibrary } from "react-native-image-picker";


const Channel = (props: any): JSX.Element => {

    let navigate = useNavigate();
    const { channelId, setChannelId } = useContext(ChannelContext);
    const [currentChannel, setCurrentChannel] = useState<any>(null);
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<Array<any>>([]);
    const [oldRefresh, refresh] = useState([0]);
    const [image, setImage] = useState<any>(null);
    const scrollViewRef = useRef<any>();

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

    const handleSendMessage = (): void => {
        sendMessage().then(
            () => {
                setMessage("");
                refresh([...oldRefresh]);
            }
        ).catch(
            (e) => console.log(e)
        );
        return;
    }

    const handleImagePick = async (): Promise<any> => {
        const options: any = {
            maxWidth: 200,
            maxHeight: 200,
        };

        // await launchImageLibrary(options, (response: any) => {
        //     console.log("response", response);
        //     if (response.uri) {
        //         setImage(response);
        //     }
        // });

        launchImageLibrary(options).then(
            (image) => {
                currentChannel.sendImage(image).then(
                    () => console.log("File sent")
                )
            }
        ).catch(
            (e) => console.log(e)
        )
    }

    useEffect(() => {
        queryChannel().then(
            (result) => {
                setCurrentChannel(result[0]);
                setMessages(result[0].state.messages);
            }
        ).catch(
            (e) => console.log(e)
        )
    }, []);

    useEffect(() => {
        queryChannel().then(
            (result) => {
                setMessages(result[0].state.messages);
            }
        ).catch(
            (e) => console.log(e)
        )
    }, [oldRefresh]);

    const messageList: JSX.Element[] = messages.map((msg) =>
        <Message key={msg.id} text={msg.text} userId={msg.user.id} name={msg.user.name} />
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

                <View style={channel.info}>
                    <TouchableOpacity onPress={() => navigate('/channel-info')}>
                        <Image source={require('./images/info.png')} />
                    </TouchableOpacity>
                </View>

            </View>

            <ScrollView
                style={channel.messages}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
            >
                {messageList}
            </ScrollView>

            <View style={channel.message_box}>
                <TouchableOpacity
                    style={channel.attachment}
                    onPress={handleImagePick}
                >
                    <Image source={require('./images/attachment.png')} />
                </TouchableOpacity>

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


