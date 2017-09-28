import { AsyncStorage } from 'react-native';
import { formatDecks, DECKS_STORAGE_KEY } from './_deck';

export const fetchDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecks);
};

export const addDeck = (deck) => (
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
);

export const addCard = ({ deck, card }) => (
  AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
    let deck = JSON.parse(result)[deck];
    let questions = deck.questions;
    questions[questions.length] = card;
    deck.questions = questions;
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
  })
)
