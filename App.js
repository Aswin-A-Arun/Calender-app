import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import LoginScreen from './Screens/LoginScreen';
import Header from './Header';


export default class App extends React.Component  {
  render(){
  return (
    <Header
  statusBarProps={{ barStyle: 'light-content' }}
  barStyle="light-content" // or directly
  centerComponent={{ text: 'Aide-Memoire', style: { color: '#' } }}
  containerStyle={{
    backgroundColor: '#3DF9A1',
    justifyContent: 'space-around',
  }}
/>

  );
  }
}
