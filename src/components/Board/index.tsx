import React from "react";
import { List } from "../List";
import { Container } from "./styles";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Board() {
  const lists = useSelector((state: RootState) => state.cards);
  
  return (
    <Container>
      {lists.map((list, index) => (
        <List
          key={list.title}
          title={list.title}
          index={index}
          cards={list.cards}
        />
      ))}
    </Container>
  );
}
