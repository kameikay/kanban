import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../mocks/api";

const cardsSlice = createSlice({
  name: 'cards',
  initialState: data,
  reducers: {
    cardsMove(state, action) {
      const { fromList, toList, from, to } = action.payload; 

      const dragged = state[fromList].cards[from];

      state[fromList].cards.splice(from, 1);
      state[toList].cards.splice(to, 0, dragged);
    }
  }
})


export const { cardsMove } = cardsSlice.actions;

export default cardsSlice.reducer;