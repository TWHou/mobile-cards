import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Deck extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck,
    headerRight: <Button title="Add Question" onPress={() => navigation.navigate('NewQuestion', { deck: 'FirstDeck' })} />,
  });

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text> {params.deck} Deck View </Text>
        <Button
          onPress={() => navigate('Quiz', { deck: 'FirstDeck' })}
          title="Start Quiz"
        />
      </View>
    );
  }
}
