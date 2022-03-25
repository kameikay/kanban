import React, { useRef, useState } from "react";
import Card from "../Card";
import { Container } from "./styled";

import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { listRename } from "../../store/Lists/Lists.slice";

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
        {cards.length > 0 &&
          cards.map((card, index) => (
            <Card key={index} data={card} index={index} listIndex={listIndex} />
          ))}
      </ul>

      <button>
        <MdAdd size={14} />
        <span>Adicionar um cartão</span>
      </button>
    </Container>
  );
}
