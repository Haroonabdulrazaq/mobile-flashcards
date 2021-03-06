import React, { useState } from "react";
import { Button, Card, Title, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../redux/actions/index";
import { CommonActions } from "@react-navigation/native";
import styled from "styled-components/native";

const AddCardContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const NewCard = styled(Card)`
  margin-top: 16px;
  border-radius: 5px;
`;

const Content = styled(Card.Content)`
  padding: 16px;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 16px;
`;

// <  Styling End  >

const AddCard = ({ navigation, route }) => {
  const [state, setState] = useState({
    question: "",
    answer: "",
  });

  const { deck } = route.params;

  const dispatch = useDispatch();

  const toDeck = () => {
    navigation.dispatch({
      ...CommonActions.goBack(),
      source: "AddCard",
    });
  };

  const handleChange = (key) => {
    return (value) => {
      setState((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    };
  };

  const handleSubmit = (event) => {
    const newCard = state;
    event.preventDefault();
    // update DB and redux store:
    addCardToDeck(deck, newCard).then(() => {
      dispatch(addCard(deck, newCard));
    });
    // set the state of the NewDeck component back to "":
    setState({
      question: "",
      answer: "",
    });
    // go back to IndividualDeck-screen:
    toDeck();
  };

  return (
    <AddCardContainer>
      <NewCard>
        <Content>
          <StyledTitle>{deck}</StyledTitle>
          <TextInput
            label="Question"
            mode="outlined"
            value={state.question}
            onChangeText={handleChange("question")}
          />
          <TextInput
            label="Answer"
            mode="outlined"
            value={state.answer}
            onChangeText={handleChange("answer")}
          />
        </Content>
        <Content>
          <Button
            disabled={state.question === "" || state.answer === ""}
            mode="contained"
            onPress={handleSubmit}
          >
            Submit
          </Button>
        </Content>
      </NewCard>
    </AddCardContainer>
  );
};

export default AddCard;
