import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class DecksListItem extends Component {
  render() {
    const { title, questions } = this.props.deck;
    return (
      <View>
        <Text> {title} </Text>
        <Text> {questions.length} Cards </Text>
      </View>
    );
  }
}
