import React, { Component } from 'react';
import { View, Picker, Item } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Tab11 from './tab11/Tab11';
import Tab12 from './tab12/Tab12';

export default class Tab1Screen extends Component<{}> {
  constructor(props) {
        super(props);
        this.state = {
            selected1: 1
        };
    }
    onValueChange(value: string) {
      this.setState({
          selected1: value
      });
      this.props.navigation.navigate('Screen_Tab11', { name: value });
    }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
        <View>
          <Picker
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
          >
              <Item label="Wallet" value="1" />
              <Item label="ATM Card" value="2" />
              <Item label="Credit Card" value="3" />
              <Item label="Debit Card" value="4" />
         </Picker>
        </View>
        <Tab1Sub />
      </View>
    );
  }
}

const Tab11Stack = StackNavigator({
  Screen_Tab11: {
    screen: Tab11
  }
}, {
  headerMode: 'none'
});
const Tab12Stack = StackNavigator({
  Screen_Tab12: {
    screen: Tab12
  }
}, {
  headerMode: 'none'
});

export const Tab1Sub = TabNavigator({
  Screen_Tab11: {
    screen: Tab11Stack,
    navigationOptions: {
      tabBarLabel: 'Tab11'
    }
  },
  Screen_Tab12: {
    screen: Tab12Stack,
    navigationOptions: {
      tabBarLabel: 'Tab12'
    }
  }
}, {
  animationEnabled: false,
  swipeEnabled: false,
  lazyLoad: true,
  initialRouteName: 'Screen_Tab11',
  tabBarPosition: 50,
  tabBarOptions: {
    activeTintColor: '#660000',
  },
});
