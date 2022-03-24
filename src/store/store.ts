import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "./Cards/Cards.slice";

const store = configureStore({
  reducer: {
    lists: listsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
