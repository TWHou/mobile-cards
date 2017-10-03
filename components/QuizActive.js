import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';

import { light, midtone } from '../utils/colors';

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
        <Text style={{paddingLeft: 5}}>
          {current + 1}/{total}
        </Text>
        <View style={styles.section}>
          <Text style={styles.question}>{question}</Text>
        </View>
        <View style={[styles.section, {justifyContent: 'flex-end'}]}>
          {showAnswer && <Text style={styles.question}>{answer}</Text>}
          {showAnswer ? (
            <TouchableOpacity style={styles.btn} onPress={toggle}>
              <Text style={styles.btnText}>Hide Answer</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btn} onPress={toggle}>
              <Text style={styles.btnText}>Show Answer</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={[styles.section]}>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#499349'}]} onPress={onRight}>
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#ad423f'}]} onPress={onWrong}>
            <Text style={styles.btnText}>Incorrect</Text>
          </TouchableOpacity>
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
  },
  btn: {
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    margin: 5,
    backgroundColor: midtone,
    alignItems: 'center',
    padding: 10
  },
  btnText: {
    color: light,
    fontSize: 18
  }
});
