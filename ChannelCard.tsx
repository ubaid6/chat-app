import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { channel_card } from "./stylesheet";


const ChannelCard = (props: any): JSX.Element => {

    return (
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
    )
}

export default ChannelCard;