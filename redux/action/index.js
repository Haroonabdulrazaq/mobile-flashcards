import { getDecks } from "../../utils/api";

export const SHOW_DECKS = "SHOW_DECKS";
export const SHOW_DECK = "SHOW_DECK";

export function showDecks(decks) {
  return {
    type: SHOW_DECKS,
    decks,
  };
}

export function showDeck(deck) {
  return {
    type: SHOW_DECK,
    deck,
  };
}

export const handleInitialData = () => async (dispatch) => {
  const decks = await getDecks();
  return dispatch(showDecks(decks));
};
