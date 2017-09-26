import React from 'react';
import { View, StatusBar } from 'react-native';

import Navigation from './components/Navigation';
import { dark, light } from './utils/colors';

const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppStatusBar backgroundColor={dark} barStyle="light-content" />
        <Navigation />
      </View>
    );
  }
}
