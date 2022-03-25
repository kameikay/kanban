import React, { useRef, useState } from "react";
import Card from "../Card";
import { Container } from "./styled";

import { MdAdd, MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { listRename } from "../../store/Lists/Lists.slice";
import { addNewCardToList } from "../../store/Cards/Cards.slice";

interface IList {
  title: string;
  index: number;
  cards: ICard[];
}

interface ICard {
  id: number;
  title: string;
  content: string;
}

export function List({ cards, title, index: listIndex }: IList) {
  const dispatch = useDispatch();

  const [newTitleList, setNewTitleList] = useState(title);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTitleCard, setNewTitleCard] = useState<string>("");

  function handleNewTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTitleList(event.target.value);
  }

  function handleAddNewCard() {
    dispatch(
      addNewCardToList({ listIndex: listIndex, newTitleCard: newTitleCard })
    );
    setIsEditing(false);
  }

  return (
    <Container>
      <header>
        <input
          onChange={handleNewTitle}
          onBlur={() => {
            dispatch(listRename({ title, newTitleList }));
          }}
          value={newTitleList}
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

      {isEditing && (
        <div className="editing">
          <textarea
            name="new-card"
            id="new-card"
            placeholder="Insira um título para este cartão..."
            value={newTitleCard}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setNewTitleCard(event.target.value)
            }
          />

          <div className="editing-buttons">
            <button className="add-card" onClick={() => handleAddNewCard()}>
              Adicionar Cartão
            </button>
            <button
              className="close-editing"
              onClick={() => setIsEditing(false)}
            >
              <MdClose size={24} />
            </button>
          </div>
        </div>
      )}

      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>
          <MdAdd size={14} />
          <span>Adicionar um cartão</span>
        </button>
      )}
    </Container>
  );
}
