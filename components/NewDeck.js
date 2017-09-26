import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class NewDeck extends Component {

  static navigationOptions = {
    title: 'Add New Deck',
  };

  render() {
    return (
      <View>
        <Text> New Deck View </Text>
      </View>
    );
  }
}
