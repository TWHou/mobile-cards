import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Deck extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: <Button title="Add Question" onPress={() => navigation.navigate('NewQuestion', navigation.state.params)} />,
  });

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>{params.title}</Text>
        <Text>{params.questions.length} Cards</Text>
        <Button
          onPress={() => navigate('Quiz', params)}
          title="Start Quiz"
        />
        <Text> {JSON.stringify(params)} </Text>
      </View>
    );
  }
}
