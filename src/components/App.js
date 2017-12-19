import React, { Component } from 'react';
import { View } from 'react-native';
import { MainScreen } from './Router';
import Header from './Header';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
        <Header />
        <MainScreen />
      </View>
    );
  }
}
