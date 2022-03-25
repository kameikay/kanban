import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../mocks/api";

const cardsSlice = createSlice({
  name: "cards",
  initialState: data,
  reducers: {
    cardsMove(state, { payload }) {
      const { fromList, toList, from, to } = payload;

      const dragged = state[fromList].cards[from];

      state[fromList].cards.splice(from, 1);
      state[toList].cards.splice(to, 0, dragged);
    },

    cardsRename(state, action) {
      const { title, newTitle } = action.payload;

      return (state = state.map((list) => {
        return {
          ...list,
          cards: list.cards.map((card) => {
            if (card.title === title) {
              return {
                id: card.id,
                title: newTitle,
                content: card.content,
              };
            } else {
              return { ...card };
            }
          }),
        };
      }));
    },

    cardsDescriptionChange(state, { payload }) {
      const { oldDescription, newDescription } = payload;

      return (state = state.map((list) => {
        return {
          ...list,
          cards: list.cards.map((card) => {
            if (card.content === oldDescription) {
              return {
                id: card.id,
                title: card.title,
                content: newDescription,
              };
            } else {
              return { ...card };
            }
          }),
        };
      }));
    },

    deleteCard(state, { payload }) {
      const { id } = payload;
      return (state = state.map((list) => {
        return { ...list, cards: list.cards.filter((card) => card.id !== id) };
      }));
    },

    addNewCardToList(state, { payload }) {
      const { listIndex, newTitleCard } = payload;
      const idSequence = data
        .map((list) => list.cards.length)
        .reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        );

      return (state = state.map((list) => {
        if (state.indexOf(list) === listIndex) {
          return {
            ...list,
            cards: [
              ...list.cards,
              {
                id: idSequence + 1,
                title: newTitleCard,
                content: "",
              },
            ],
          };
        } else {
          return {
            ...list,
          };
        }
      }));
    },

    listAdd(state, { payload }) {
      const { title } = payload;
      const newList = {
        title,
        cards: [],
      };

      return state = [...state, {
        ...newList,
      }];
    },
  },
});

export const { cardsMove, cardsRename, cardsDescriptionChange, deleteCard, addNewCardToList, listAdd } =
  cardsSlice.actions;

export default cardsSlice.reducer;
