import React, { Component } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { addDeck } from '../actions';
import { light, lightShade, darkTint } from '../utils/colors';
import TextButton from './TextButton';

class NewDeck extends Component {
  static navigationOptions = {
    title: 'Add New Deck'
  };

  state = {
    name: ''
  };

  onSubmit = () => {
    const { name } = this.state;
    const { decks } = this.props;
    if (decks[name]) {
      Alert.alert(
        'Deck already exists',
        'Do you want to add card to the deck or add a different deck?',
        [
          {
            text: 'Add Deck',
            onPress: () => this.setState({ question: '', answer: '' })
          },
          {
            text: 'Add Card',
            onPress: () =>
              this.props.navigation.dispatch(
                NavigationActions.reset({
                  index: 2,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Home' }),
                    NavigationActions.navigate({
                      routeName: 'Deck',
                      params: name
                    }),
                    NavigationActions.navigate({
                      routeName: 'NewQuestion',
                      params: name
                    })
                  ]
                })
              )
          }
        ]
      );
    } else {
      const deck = {
        [this.state.name]: {
          title: this.state.name,
          questions: []
        }
      };
      this.props.addDeck(deck);
      this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Home' })]
        })
      );
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={name => this.setState({ name })}
          placeholder="Name of Deck"
        />
        <TextButton btnStyle={styles.btn} onPress={this.onSubmit}>
          Submit
        </TextButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: light
  },
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderBottomWidth: 1,
    borderColor: lightShade,
    margin: 20
  },
  btn: {
    margin: 25,
    backgroundColor: darkTint
  }
});

const mapStateToProps = state => ({
  decks: state
});

const mapDispatchToProps = {
  addDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);
