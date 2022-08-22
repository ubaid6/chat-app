import React from "react";
import { Text } from "react-native";


const Message = (props:any): JSX.Element => {
    return (
        <>
            <Text>
                {props.text}
            </Text>
        </>
    );
}

export default Message