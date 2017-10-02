import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class QuizEnd extends Component {
  render() {
    const {correct, total} = this.props;
    return (
      <View>
        <Text>You got {correct} out of {total} questions right.</Text>
      </View>
    );
  }
}
