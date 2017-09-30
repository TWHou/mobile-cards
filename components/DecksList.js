import React, { Component } from 'react';
import { TouchableOpacity, View, Button, FlatList } from 'react-native';

import { fetchDecks } from '../utils/api';
import DecksListItem from './DecksListItem';

class DecksList extends Component {

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

  state = {
    decks: []
  }

  componentDidMount = () => {
    fetchDecks().then(
      (decks) => {
        this.setState({
          decks: Object.keys(decks).map(
            (deckKey) => decks[deckKey]
          )
        });
      }
    );
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('Deck', item)}
    >
      <DecksListItem deck={item}/>
    </TouchableOpacity>
  )

  render() {
    return (
      <View>
        {this.state.decks && (<FlatList
          data={this.state.decks}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.title}
        />)}
      </View>
    );
  }
}

export default DecksList;
