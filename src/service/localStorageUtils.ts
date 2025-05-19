import { TodosState } from "./todosSlice";

const TODO_STORAGE_KEY = "todos-redux-state";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(TODO_STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Не удалось загрузить данные", err);
    return undefined;
  }
};

export const saveState = (state: TodosState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(TODO_STORAGE_KEY, serializedState);
  } catch (err) {
    console.error("Данные не были сохранены", err);
  }
};
