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
import { UserContext } from './UserContext';
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

const App = (): JSX.Element => {

  const [user, setUser] = useState(null);

  return (
    <NativeRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </NativeRouter>
  );
}

export default App;
