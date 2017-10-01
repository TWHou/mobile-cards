import React, { Component } from 'react';
import { TouchableOpacity, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';

import DecksListItem from './DecksListItem';
import { fetchDecks } from '../actions';

class DecksList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerTitle: 'Mobile Cards',
      headerRight: (
        <Button title="Add Deck" onPress={() => navigate('NewDeck')} />
      )
    };
  };

  componentDidMount = () => {
    this.props.fetchDecks();
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('Deck', item.title)}
    >
      <DecksListItem deck={item} />
    </TouchableOpacity>
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.props.decks}
          renderItem={this.renderItem}
          keyExtractor={item => item.title}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: Object.keys(state).map(title => state[title])
});

const mapDispatchToProps = {
  fetchDecks
};

export default connect(mapStateToProps, mapDispatchToProps)(DecksList);
