import React from "react";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router-native";
import { channel_info } from "./stylesheet";


const ChannelInfo = (): JSX.Element => {

    let navigate = useNavigate();

    return (
        <>
            <StatusBar backgroundColor={"cyan"} />

            <View>
                <View style={channel_info.back}>
                    <TouchableOpacity onPress={() => navigate('/channel')}>
                        <Image source={require("./images/back.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default ChannelInfo;