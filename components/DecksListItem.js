import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { dark, darkTint } from '../utils/colors';

export default class DecksListItem extends Component {
  render() {
    const { title, questions } = this.props.deck;
    return (
      <View style={styles.deck}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.cards}> {questions.length} Cards </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    margin: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 36,
    color: dark,
    padding: 10
  },
  cards: {
    fontSize: 18,
    color: darkTint
  }
});
