import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { addDeck } from '../utils/api';

export default class NewDeck extends Component {

  static navigationOptions = {
    title: 'Add New Deck',
  };

  state = {
    name: ''
  }

  onSubmit = () => {
    // Check for duplicate entry
    const deck = {
      [this.state.name]: {
        title: this.state.name,
        questions: []
      }
    };
    addDeck(deck).then(() => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home'})]
      });
      this.props.navigation.dispatch(resetAction);
    });
  }

  render() {
    return (
      <View>
        <Text> New Deck View </Text>
        <TextInput
          onChangeText={(name) => this.setState({name})}
          placeholder="Name of Deck"
        />
        <Button
          title="Submit"
          onPress={this.onSubmit}
        />
      </View>
    );
  }
}
