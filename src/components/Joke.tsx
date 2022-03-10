import React from "react";
import { RawJoke } from "../types/joke";
import { Flex } from "./styles/Flex.styled";
import { Card } from "./styles/Card.styled";

export const Joke: React.FC<{ joke: RawJoke }> = ({ joke }) => {
  return (
    <Flex>
      <Card>
        <Flex gap={10}>
          <img src={joke.icon_url} alt="Чак Норис" />
          <p>{joke.value}</p>
        </Flex>
      </Card>
    </Flex>
  );
};
