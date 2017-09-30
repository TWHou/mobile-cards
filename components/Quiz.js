import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Quiz extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text> {params.title} Quiz View </Text>
      </View>
    );
  }
}
