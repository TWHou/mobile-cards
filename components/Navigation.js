import { StackNavigator } from 'react-navigation';

import { dark, light } from '../utils/colors';

import DecksList from './DecksList';
import NewDeck from './NewDeck';
import Deck from './Deck';
import Quiz from './Quiz';
import NewQuestion from './NewQuestion';

const Navigation = StackNavigator({
  Home: { screen: DecksList },
  NewDeck: { screen: NewDeck },
  Deck: {
    path: 'deck/:deck',
    screen: Deck
  },
  Quiz: {
    path: 'quiz/:deck',
    screen: Quiz
  },
  NewQuestion: {
    path: 'new/:deck',
    screen: NewQuestion
  }
  }, {
    navigationOptions: {
      headerTintColor: light,
      headerStyle: {
        backgroundColor: dark,
      }
    }
  }
);

export default Navigation;
