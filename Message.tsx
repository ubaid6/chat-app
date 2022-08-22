import React, { useContext } from "react";
import { Text, View } from "react-native";
import { UserContext } from "./Context";
import { channel } from "./stylesheet";


const Message = (props: any): JSX.Element => {
    const {user, setUser} = useContext(UserContext);
    var author:boolean = false;

    if (props.userId === user)
        author = true;
    else
        author = false;

    return (
        <>
            <View style={author? channel.author_message : channel.other_message}>
                <Text style={channel.message_text}>
                    {props.text}
                </Text>
            </View>
        </>
    );
}

export default Message