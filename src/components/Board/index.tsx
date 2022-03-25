import React from "react";
import { List } from "../List";
import { Container } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { MdAdd, MdClose } from "react-icons/md";
import { useState } from "react";
import { listAdd } from "../../store/Cards/Cards.slice";

export default function Board() {
  const lists = useSelector((state: RootState) => state.cards);
  const [isAddingNewList, setIsAddingNewList] = useState<boolean>(false);
  const [newListTitle, setNewListTitle] = useState<string>("");

  const dispatch = useDispatch();

  function handleCreateNewList() {
    dispatch(listAdd({ title: newListTitle }));
    setIsAddingNewList(false);
    setNewListTitle('');
  }

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

      {isAddingNewList && (
        <div className="creating-list ">
          <textarea
            name="new-list"
            id="new-list"
            placeholder="Insira o título da lista..."
            value={newListTitle}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setNewListTitle(event.target.value)
            }
          />

          <div className="editing-buttons">
            <button
              className="add-list-btn"
              onClick={() => handleCreateNewList()}
            >
              Adicionar Lista
            </button>
            <button
              className="close-creating"
              onClick={() => setIsAddingNewList(false)}
            >
              <MdClose size={24} />
            </button>
          </div>
        </div>
      )}

      {!isAddingNewList && (
        <button className="add-list" onClick={() => setIsAddingNewList(true)}>
          <MdAdd size={16} />
          Adicionar outra lista
        </button>
      )}
    </Container>
  );
}
