import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Button,
  FlatList,
  StyleSheet,
  Platform
} from 'react-native';
import { connect } from 'react-redux';

import DecksListItem from './DecksListItem';
import { fetchDecks } from '../actions';
import { light } from '../utils/colors';

class DecksList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerTitle: 'Mobile Cards',
      headerRight: (
        <Button
          title="Add Deck"
          color={light}
          onPress={() => navigate('NewDeck')}
        />
      )
    };
  };

  componentDidMount = () => {
    this.props.fetchDecks();
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.deck}
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

const styles = StyleSheet.create({
  deck: {
    backgroundColor: light,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
});

const mapStateToProps = state => ({
  decks: Object.keys(state).map(title => state[title])
});

const mapDispatchToProps = {
  fetchDecks
};

export default connect(mapStateToProps, mapDispatchToProps)(DecksList);
