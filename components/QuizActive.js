import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

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
      <View>
        <Text>
          {current + 1}/{total}
        </Text>
        <Text>{question}</Text>
        {showAnswer && <Text>{answer}</Text>}
        {showAnswer ? (
          <TouchableOpacity onPress={toggle}>
            <Text>Hide Answer</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={toggle}>
            <Text>Show Answer</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={onRight}>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onWrong}>
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
