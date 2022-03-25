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
  },
});

export const { cardsMove, cardsRename, cardsDescriptionChange } =
  cardsSlice.actions;

export default cardsSlice.reducer;
