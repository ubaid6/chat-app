import React, { useContext, useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Navigate, useNavigate } from "react-router-native";
import { channel_card, create_channel, register } from "./stylesheet";
import { ChannelContext, UserContext } from "./Context";


const ChannelCard = (props: any): JSX.Element => {

    let navigate = useNavigate();
    const { channelId, setChannelId } = useContext(ChannelContext);

    const handlePress = (): void => {
        setChannelId(props.id);
        navigate('/channel');
    }

    return (
        <>
            <TouchableOpacity onPress={handlePress}>
                <View style={channel_card.card}>
                    <View style={channel_card.image}>
                        <Image source={require('./images/user.png')} />
                    </View>

                    <View style={channel_card.text}>
                        <Text>
                            {props.name}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default ChannelCard;