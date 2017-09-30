import React, { Component } from 'react';
import { Alert, Text, View, TextInput, Button } from 'react-native';

import { addCard } from '../utils/api';

export default class NewQuestion extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  state = {
    question: '',
    answer: ''
  }

  onSubmit = () => {
    const { question, answer } = this.state;
    if (question === '' || answer === '') {
      Alert.alert('Incomplete', 'All fields are required');
    } else {
      const card = { question, answer };
      const deck = this.props.navigation.state.params.title;
      addCard({deck, card});
      Alert.alert('Card Added', 'Do you want to add more cards?', [
        {
          text: 'Yes',
          onPress: () => this.setState({question: '', answer: ''})
        },
        {
          text: "No, I'm done",
          onPress: () => this.props.navigation.goBack()
        }
      ])
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text> {params.title} New Question View </Text>
        <TextInput
          onChangeText={(question) => this.setState({question})}
          multiline = {true}
          numberOfLines = {4}
          placeholder="Question"
        />
        <TextInput
          onChangeText={(answer) => this.setState({answer})}
          multiline = {true}
          numberOfLines = {4}
          placeholder="Answer"
        />
        <Text>{JSON.stringify(this.state)}</Text>
        <Button
          title="Submit"
          onPress={this.onSubmit}
        />
      </View>
    );
  }
}
