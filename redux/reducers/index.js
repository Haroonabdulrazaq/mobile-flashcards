import {
  SHOW_DECKS,
  SHOW_DECK,
} from "../actions";

export default function decks(state = {}, action) {
  switch (action.type) {
    case SHOW_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case SHOW_DECK:
      return {
        ...state,
        ...action.deck,
      };
    default:
      return state;
  }
}