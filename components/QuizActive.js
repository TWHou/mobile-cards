import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { light } from '../utils/colors';
import TextButton from './TextButton';

export default class QuizActive extends Component {
  render() {
    const {
      current,
      total,
      question,
      answer,
      showAnswer,
      toggle,
      onRight,
      onWrong
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ paddingLeft: 5 }}>
          {current + 1}/{total}
        </Text>
        <View style={styles.section}>
          <Text style={styles.question}>{question}</Text>
        </View>
        <View style={[styles.section, { justifyContent: 'flex-end' }]}>
          {showAnswer && <Text style={styles.question}>{answer}</Text>}
          {showAnswer ? (
            <TextButton onPress={toggle}>Hide Answer</TextButton>
          ) : (
            <TextButton onPress={toggle}>Show Answer</TextButton>
          )}
        </View>
        <View style={[styles.section]}>
          <TextButton btnStyle={{ backgroundColor: '#499349' }} onPress={onRight}>
            Correct
          </TextButton>
          <TextButton btnStyle={{ backgroundColor: '#ad423f' }} onPress={onWrong}>
            Incorrect
          </TextButton>
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
  question: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
