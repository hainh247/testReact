import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import icLogo from '../media/appIcon/ic_logo.png';
import icMenu from '../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');
export default class Header extends Component<{}> {
render() {
  const { wrapper, row1, iconStyle } = styles;
  return (
    <View style={wrapper}>
        <View style={row1}>
            <TouchableOpacity>
                <Image source={icMenu} style={iconStyle} />
            </TouchableOpacity>
            <Image source={icLogo} style={iconStyle} />
        </View>
    </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        height: height / 5,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around'
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: {
        height: height / 23,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingVertical: 0
    },
    text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 25, height: 25 }
});
