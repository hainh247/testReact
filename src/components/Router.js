import { TabNavigator, StackNavigator } from 'react-navigation';
import Tab1Screen from './tab1/Tab1';
import Tab2 from './tab2/Tab2';


const Tab2Stack = StackNavigator({
  Screen_Tab2: {
    screen: Tab2
  }
}, {
  headerMode: 'none'
});
export const MainScreen = TabNavigator({
  Screen_Tab1: {
    screen: Tab1Screen,
    navigationOptions: {
      tabBarLabel: 'Tab1'
    }
  },
  Screen_Tab2: {
    screen: Tab2Stack,
    navigationOptions: {
      tabBarLabel: 'Tab2'
    }
  }
  }, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#000000',
  }
});
