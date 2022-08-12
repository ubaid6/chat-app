import React, { type PropsWithChildren } from 'react';
import { useState } from 'react';
import { register } from './stylesheet';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TextInput,
} from 'react-native';


export const Register = (): JSX.Element => {

    return (
        <View>
            <StatusBar backgroundColor={"cyan"}/>
            <Text style={register.title}>
                Hello! {'\n'}
                Welcome to my Chat App!
            </Text>

            <View style={register.bodyView}>
                <Text style={register.bodyText}>
                    Please enter your name
                </Text>

                <TextInput style={register.bodyInput}/>
            </View>

        </View>
    );
}


export default Register;