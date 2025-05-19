import React from "react";
import { useSelector } from "react-redux";
import AddTodoForm from "./AddTodoForm";
import TodoFilter from "./TodoFilter"; // Добавляем импорт
import { RootState } from "../service/store";
import { Card, List, Typography } from "antd";
import { FilterStatus } from "../service/todosSlice";
import TodoItem from "./TodoItem";

const { Title } = Typography;

const TodoList: React.FC = () => {
  const { todos, filter } = useSelector((state: RootState) => state.todos);

  // Фильтрация задач
  const filteredTodos = todos.filter((todo) => {
    if (filter === FilterStatus.Active) return !todo.completed;
    if (filter === FilterStatus.Completed) return todo.completed;
    return true;
  });

  return (
    <Card style={{ maxWidth: 800, margin: "0 auto" }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Todo List
      </Title>
      <AddTodoForm />
      <TodoFilter />
      <List
        dataSource={filteredTodos}
        renderItem={(todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        )}
        locale={{ emptyText: "Нет задач" }}
      />
    </Card>
  );
};

export default TodoList;
