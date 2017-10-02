import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { light } from '../utils/colors';

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
      <View>
        <Text>{title}</Text>
        <Text>{questions.length} Cards</Text>
        <Button onPress={() => navigate('Quiz', title)} title="Start Quiz" />
        <Text> {JSON.stringify(this.props)} </Text>
      </View>
    );
  }
}

const mapStateToProps = (state, { navigation }) => {
  const { title, questions } = state[navigation.state.params];
  return {
    title,
    questions
  };
};

export default connect(mapStateToProps)(Deck);
