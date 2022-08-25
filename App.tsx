/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Register from './Register';
import Home from './Home';
import CreateChannel from './CreateChannel';
import { ChannelContext, UserContext } from './Context';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import Channel from './Channel';
import ChannelInfo from './ChannelInfo';

const App = (): JSX.Element => {

  const [user, setUser] = useState(null);
  const [channelId, setChannelId] = useState("");

  return (
    <NativeRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <ChannelContext.Provider value={{ channelId, setChannelId }}>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create-channel" element={<CreateChannel />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/channel-info" element={<ChannelInfo />} />
          </Routes>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </NativeRouter>
  );
}

export default App;
