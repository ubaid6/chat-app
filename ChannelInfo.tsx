import React, { useContext, useEffect, useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router-native";
import { StreamChat, DefaultGenerics } from "stream-chat";
import { apiKeys } from "./config";
import { ChannelContext } from "./Context";
import { channel_info } from "./stylesheet";
import UserCard from "./UserCard";


const ChannelInfo = (): JSX.Element => {

    let navigate = useNavigate();
    const { channelId, setChannelId } = useContext(ChannelContext);
    const [members, setMembers] = useState<Array<any>>([]);

    const client: StreamChat<DefaultGenerics> = StreamChat.getInstance(apiKeys.API_KEY);

    const queryChannel = async (): Promise<any> => {
        const filter = { id: channelId };
        const channel = await client.queryChannels(filter, {});
        return channel;
    }

    useEffect(() => {
        queryChannel().then(
            (channel) => {
                let userList = [];
                let chan = channel[0].state.members;
                for (const user in chan) {
                    userList.push(user);
                }
                setMembers([...userList]);
            }
        )
    }, []);

    const memberList: JSX.Element[] = members.map((member: any) =>
        <UserCard key={member} name={member} />
    );


    return (
        <>
            <StatusBar backgroundColor={"cyan"} />

            <View style={channel_info.header}>
                <View style={channel_info.back}>
                    <TouchableOpacity onPress={() => navigate('/channel')}>
                        <Image source={require("./images/back.png")} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={channel_info.text}>
                    Members
                </Text>
            </View>
            {memberList}
        </>
    );
}

export default ChannelInfo;