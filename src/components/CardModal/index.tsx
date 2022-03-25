import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  MdClose,
  MdOutlineSubtitles,
  MdFormatAlignLeft,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  cardsDescriptionChange,
  cardsRename,
  deleteCard,
} from "../../store/Cards/Cards.slice";
import { RootState } from "../../store/store";
import { Container, Overlay } from "./styles";

const portalDiv = document.getElementById("modal-root") as Element;

interface ICardModal {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: DataType;
}

type DataType = {
  id: number;
  title: string;
  content: string;
  listIndex: number;
};

export function CardModal({ setIsModalOpen, data }: ICardModal) {
  const list = useSelector((state: RootState) => state.lists[data.listIndex]);
  const dispatch = useDispatch();
  const [description, setDescription] = useState<string>(data.content);
  const [newTitle, setNewTitle] = useState(data.title);

  function handleNewTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTitle(event.target.value);
  }

  function handleDescriptionChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setDescription(event.target.value);
  }

  function handleDeleteCard(id: number) {
    dispatch(deleteCard({ id }));
    setIsModalOpen(false);
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <button className="close-button" onClick={() => setIsModalOpen(false)}>
          <MdClose />
        </button>

        <header>
          <div className="icon">
            <MdOutlineSubtitles />
          </div>

          <div className="title">
            <input
              onChange={handleNewTitle}
              onBlur={() => {
                dispatch(cardsRename({ title: data.title, newTitle }));
              }}
              value={newTitle}
              onFocus={(event) => event.target.select()}
            />
            <p>
              na lista <span>{list.title}</span>
            </p>
          </div>
        </header>

        <main>
          <div className="description">
            <header>
              <div className="icon">
                <MdFormatAlignLeft />
              </div>
              <div className="title">
                <h3>Descrição</h3>
              </div>
            </header>

            <textarea
              name="description"
              id="description"
              placeholder="Adicione uma descrição mais detalhada..."
              value={description}
              onChange={handleDescriptionChange}
              onBlur={() =>
                dispatch(
                  cardsDescriptionChange({
                    oldDescription: data.content,
                    newDescription: description,
                  })
                )
              }
            ></textarea>
          </div>
        </main>

        <div className="buttons">
          <button
            className="save modal-btn"
            onClick={() => setIsModalOpen(false)}
          >
            Salvar
          </button>
          <button
            className="delete modal-btn"
            onClick={() => handleDeleteCard(data.id)}
          >
            <MdOutlineDeleteOutline />
            Excluir
          </button>
        </div>
      </Container>
    </Overlay>,
    portalDiv
  );
}
