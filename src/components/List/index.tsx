import React, { useState } from "react";
import Card from "../Card";
import { Container } from "./styled";

import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { listRename } from "../../store/Cards/Cards.slice";
import { RootState } from "../../store/store";

interface IList {
  title: string;
  index: number;
  cards: {
    id: number;
    title: string;
    content: string;
  }[];
}

export function List({ title, cards, index: listIndex }: IList) {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState(title);

  function handleNewTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTitle(event.target.value);
  }

  return (
    <Container>
      <header>
        <input
          onChange={handleNewTitle}
          onBlur={() => {
            dispatch(listRename({ title, newTitle }));
          }}
          value={newTitle}
          onFocus={(event) => event.target.select()}
        />

        <small>{cards.length} cartões</small>
      </header>

      <ul>
        {cards.map((card, index) => (
          <Card key={card.id} data={card} index={index} listIndex={listIndex} />
        ))}
      </ul>

      <button>
        <MdAdd size={14} />
        <span>Adicionar um cartão</span>
      </button>
    </Container>
  );
}
