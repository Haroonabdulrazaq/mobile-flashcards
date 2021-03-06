import React from "react";
import { TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const DeckCard = styled(Card)`
  margin-top: 16px;
  border-radius: 5px;
`;

const Content = styled(Card.Content)`
  padding: 16px;
`;

const DeckListCard = ({ navigation, deck }) => {
  return (
    <DeckCard>
      <TouchableOpacity
        onPress={() => navigation.navigate("Deck", { deckID: deck.title })}
      >
        <Content>
          <Title>{deck.title}</Title>
          <Paragraph>
            {deck.questions.length}{" "}
            {deck.questions.length === 1 ? "card" : "cards"}
          </Paragraph>
        </Content>
      </TouchableOpacity>
    </DeckCard>
  );
};

export default DeckListCard;
