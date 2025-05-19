import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum FilterStatus {
  All = "all",
  Completed = "completed",
  Active = "active",
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
  filter: FilterStatus;
}

const initialState: TodosState = {
  todos: [],
  filter: FilterStatus.All,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (
      state,
      action: PayloadAction<{ id: string; newText: string }>
    ) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.newText;
      }
    },
    setFilter: (state, action: PayloadAction<FilterStatus>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo, setFilter } =
  todosSlice.actions;
export default todosSlice.reducer;
