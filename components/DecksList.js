import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class DecksList extends Component {

  static navigationOptions = ({ navigation }) => {
    const {navigate} = navigation;
    return {
      headerTitle: 'Mobile Cards',
      headerRight: (
        <Button
          title="Add Deck"
          onPress={() => navigate('NewDeck')}
        />
      ),
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text> Decks List View </Text>
        <Button
          onPress={() => navigate('Deck', { deck: 'FirstDeck' })}
          title="First Deck"
        />
      </View>
    );
  }
}
