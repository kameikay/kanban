import React from "react";
import Card from "../Card";
import { Container } from "./styled";

import { MdAdd } from "react-icons/md";

interface IList {
  title: string;
  cards: {
    id: number;
    title: string;
    content: string;
  }[];
}

export function List({ title, cards }: IList) {
  return (
    <Container>
      <header>
        <h2>{title}</h2>
        <small>{cards.length} cartões</small>
      </header>

      <ul>
        {cards.map((card, index) => (
          <Card key={card.id} data={card} index={index} />
        ))}
      </ul>

      <button>
        <MdAdd size={14} />
        <span>Adicionar um cartão</span>
      </button>
    </Container>
  );
}
