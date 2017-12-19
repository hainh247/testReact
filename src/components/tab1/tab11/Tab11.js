import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Tab11 extends Component<{}> {
  render() {
    let ten = 2;
    if (this.props.navigation.state.params) {
      ten = this.props.navigation.state.params.name;
    }
    return (
      <View>
        <Text>
          Xin chào { ten }
        </Text>
      </View>
    );
  }
}
