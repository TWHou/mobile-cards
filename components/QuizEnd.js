import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { light } from '../utils/colors';
import TextButton from './TextButton';

export default class QuizEnd extends Component {
  render() {
    const { correct, total, reset, goBack } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.text}>
            You got {correct} out of {total} questions right.
          </Text>
        </View>
        <View>
          <TextButton onPress={reset}>Restart Quiz</TextButton>
          <TextButton onPress={goBack}>Return to Deck</TextButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 5,
    backgroundColor: light
  },
  section: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 5,
    padding: 10
  },
  text: {
    fontSize: 18
  }
});
