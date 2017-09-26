import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class NewQuestion extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text> {params.deck} New Question View </Text>
      </View>
    );
  }
}
