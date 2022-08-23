import React from "react";
import { Image, Text, View } from "react-native";
import { channel_card } from "./stylesheet";


const UserCard = (props: any): JSX.Element => {
    return (
        <>
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
        </>
    )
}

export default UserCard;