import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./Cards/Cards.slice";
import listsReducer from "./Lists/Lists.slice";

const store = configureStore({
  reducer: {
    lists: listsReducer,
    cards: cardsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
