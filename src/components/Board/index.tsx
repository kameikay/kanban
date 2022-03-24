import React from "react";
import { List } from "../List";
import { Container } from "./styles";

import { data } from "../../mocks/api";

export default function Board() {
  return (
    <Container>
      {data.map((list) => (
        <List key={list.title} title={list.title} cards={list.cards} />
      ))}
    </Container>
  );
}
