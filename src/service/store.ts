import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import { loadState, saveState } from "./localStorageUtils";

const preloadedState = {
  todos: loadState() || {
    todos: [],
    filter: "all",
  },
};

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  saveState(store.getState().todos);
});
