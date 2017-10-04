import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';

import { light, dark, darkTint } from '../utils/colors';
import TextButton from './TextButton';

class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        title="Add Question"
        color={light}
        onPress={() =>
          navigation.navigate('NewQuestion', navigation.state.params)}
      />
    )
  });

  render() {
    const { title, questions } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.deck}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.cards}>{questions.length} Cards</Text>
        </View>
        <TextButton btnStyle={styles.btn} onPress={() => navigate('Quiz', title)}>
          Start Quiz
        </TextButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    margin: 20,
    alignItems: 'stretch',
    justifyContent: 'flex-end'
  },
  content: {
    flex: 2,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    backgroundColor: light,
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 36,
    color: dark,
    paddingBottom: 30
  },
  cards: {
    fontSize: 18,
    color: darkTint
  },
  btn: {
    margin: 25,
    backgroundColor: darkTint
  }
});

const mapStateToProps = (state, { navigation }) => {
  const { title, questions } = state[navigation.state.params];
  return {
    title,
    questions
  };
};

export default connect(mapStateToProps)(Deck);
