import React from "react";
import { Text, View } from "react-native";
import { UserContext } from "./Context";
import { channel } from "./stylesheet";


const Message = (props: any): JSX.Element => {
    return (
        <>
            <View style={channel.author_message}>
                <Text style={channel.message_text}>
                    {props.text}
                </Text>
            </View>
        </>
    );
}

export default Message