import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../mocks/api";

const listsSlice = createSlice({
  name: "lists",
  initialState: data,
  reducers: {
    listRename(state, { payload }) {
      const { title, newTitle } = payload;

      return (state = state.map((list) =>
        list.title === title
          ? { title: newTitle, cards: [...list.cards] }
          : { ...list }
      ));
    },
  
  },
});

export const { listRename } = listsSlice.actions;

export default listsSlice.reducer;
