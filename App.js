/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

 
import Home from './src/pages/Home/Home'
import Routes from './src/routes/Routes'
import { Colors } from './src/theme';
const App = () => {
  return (
    <>
      <StatusBar barStyle={Colors.barStyle} backgroundColor={Colors.white} />
       
      <Routes login={false} />
    </>
  );
};
 

export default App;
