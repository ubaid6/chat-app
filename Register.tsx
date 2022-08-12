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


const Register = (): JSX.Element => {

    return (
        <View>
            <Text style={register.text}>
                Hello! {'\n'}
                Welcome to my Chat App!
            </Text>
        </View>
    );
}


export default Register;