import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../mocks/api";
const listsSlice = createSlice({
  name: "cards",
  initialState: data,
  reducers: {
    cardsMove(state, { payload }) {
      const { fromList, toList, from, to } = payload;

      const dragged = state[fromList].cards[from];

      state[fromList].cards.splice(from, 1);
      state[toList].cards.splice(to, 0, dragged);
    },
    listRename(state, { payload }) {
      const { title, newTitle } = payload;

      return (state = state.map((list) =>
        list.title === title
          ? { title: newTitle, cards: [...list.cards] }
          : { ...list }
      ));
    },
    cardsRename(state, action) {
      const { title, newTitle } = action.payload;
      const listTitle = state.find((list) => list.title === title);

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
  },
});

export const { cardsMove, cardsRename, listRename } = listsSlice.actions;

export default listsSlice.reducer;
