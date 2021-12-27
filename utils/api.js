import AsyncStorage from "@react-native-async-storage/async-storage";

//Test Data
export const decks = {
  Udacity: {
    title: "Udacity",
    questions: [
      {
        question: "Why Udacity?",
        answer: "Because they are the best",
      },
      {
        question: "What are we studying?",
        answer: "React",
      },
    ],
  },
};

const CARD_STORAGE_KEY = "MobileFlashcards:decks";

export const getDecks = async () => {
  try {
    let value = await AsyncStorage.getItem(CARD_STORAGE_KEY);
    if (value !== null) {
      // value previously stored
      value = await JSON.parse(value);
      return value;
    } else {
      return decks;
    }
  } catch (e) {
    // error reading value
    return decks;
  }
};

// take in a single title argument and return the deck associated with that title from all decks:
export const getDeck = async (deck) => {
  let value = await AsyncStorage.getItem(CARD_STORAGE_KEY);
  return JSON.parse(value)[deck];
};



