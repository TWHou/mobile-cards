import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { light } from '../utils/colors';

export default class QuizEnd extends Component {
  render() {
    const { correct, total } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          You got {correct} out of {total} questions right.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    backgroundColor: light
  },
  text: {
    fontSize: 18
  }
});
