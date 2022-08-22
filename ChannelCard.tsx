import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router-native";
import { channel_card, create_channel, register } from "./stylesheet";


const ChannelCard = (props: any): JSX.Element => {

    return (
        <>
            <TouchableOpacity>
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