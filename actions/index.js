import * as api from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

const _receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const fetchDecks = () => dispatch => {
  api.fetchDecks().then(decks => dispatch(_receiveDecks(decks)));
};

const _addDeck = deck => ({
  type: ADD_DECK,
  deck
});

export const addDeck = deck => dispatch => {
  api.addDeck(deck).then(() => dispatch(_addDeck(deck)));
};

// deck: string
// card: {question, answer}

const _addCard = (deck, card) => ({
  type: ADD_CARD,
  deck,
  card
});

export const addCard = (deck, card) => dispatch => {
  api.addCard(deck, card).then(() => dispatch(_addCard(deck, card)));
};
