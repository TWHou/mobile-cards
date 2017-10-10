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
    title: ''
  };

  onSubmit = () => {
    const { title } = this.state;
    const { decks } = this.props;
    if (decks[title]) {
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
                      params: title
                    }),
                    NavigationActions.navigate({
                      routeName: 'NewQuestion',
                      params: title
                    })
                  ]
                })
              )
          }
        ]
      );
    } else {
      const deck = {
        [this.state.title]: {
          title: this.state.title,
          questions: []
        }
      };
      this.props.addDeck(deck);
      setTimeout(() => {
        this.props.navigation.dispatch(
          NavigationActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({ routeName: 'Home' }),
              NavigationActions.navigate({
                routeName: 'Deck',
                params: title
              })
            ]
          })
        );
      }, 500);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={title => this.setState({ title })}
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
