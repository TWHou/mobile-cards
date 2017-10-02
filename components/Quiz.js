import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import QuizActive from './QuizActive';
import QuizEnd from './QuizEnd';

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params
  });

  state = {
    current: 0,
    correct: 0,
    showAnswer: false
  };

  onRight = () => {
    this.setState(({ correct }) => ({
      correct: correct + 1
    }));
    this.nextQ();
  };

  nextQ = () => {
    this.setState(({ current }) => ({
      current: current + 1,
      showAnswer: false
    }));
  };

  toggle = () => {
    this.setState(({ showAnswer }) => ({ showAnswer: !showAnswer }));
  };

  render() {
    const { questions } = this.props;
    const { current, correct, showAnswer } = this.state;
    return (
      <View>
        {current < questions.length ? (
          <QuizActive
            current={current}
            total={questions.length}
            question={questions[current].question}
            answer={questions[current].answer}
            showAnswer={showAnswer}
            toggle={this.toggle}
            onRight={this.onRight}
            onWrong={this.nextQ}
          />
        ) : (
          <QuizEnd correct={correct} total={questions.length} />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state, { navigation }) => ({
  questions: state[navigation.state.params].questions
});

export default connect(mapStateToProps)(Quiz);
