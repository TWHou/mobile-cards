import React, { Component } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import { addCard } from '../actions';
import { light, lightShade, darkTint } from '../utils/colors';
import TextButton from './TextButton';

class NewQuestion extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params
  });

  state = {
    question: '',
    answer: '',
    qHeight: 20,
    aHeight: 20
  };

  onSubmit = () => {
    const { question, answer } = this.state;
    if (question === '' || answer === '') {
      Alert.alert('Incomplete', 'All fields are required');
    } else {
      const card = { question, answer };
      const deck = this.props.navigation.state.params;
      this.props.addCard(deck, card);
      Alert.alert('Card Added', 'Do you want to add more cards?', [
        {
          text: 'Yes',
          onPress: () => this.setState({ question: '', answer: '' })
        },
        {
          text: "No, I'm done",
          onPress: () => this.props.navigation.goBack()
        }
      ]);
    }
  };

  render() {
    const { qHeight, aHeight } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          style={[styles.input, { height: qHeight }]}
          onChangeText={question => this.setState({ question })}
          onContentSizeChange={({ nativeEvent }) => {
            this.setState({ qHeight: nativeEvent.contentSize.height + 8 });
          }}
          multiline={true}
          placeholder="Question"
        />
        <TextInput
          style={[styles.input, { height: aHeight }]}
          onChangeText={answer => this.setState({ answer })}
          onContentSizeChange={({ nativeEvent }) => {
            this.setState({ aHeight: nativeEvent.contentSize.height + 8 });
          }}
          multiline={true}
          placeholder="Answer"
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
    fontSize: 18,
    maxHeight: 72,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: lightShade,
    margin: 20
  },
  btn: {
    margin: 25,
    backgroundColor: darkTint
  }
});

const mapDispatchToProps = {
  addCard
};

export default connect(null, mapDispatchToProps)(NewQuestion);
