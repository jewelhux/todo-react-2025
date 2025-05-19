import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../service/todosSlice";
import { List, Input, Button, Space, Checkbox, Typography } from "antd";
import { EditOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id, newText: editText }));
      setIsEditing(false);
    }
  };

  return (
    <List.Item>
      {isEditing ? (
        <Space.Compact style={{ width: "100%" }}>
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onPressEnter={handleEdit}
          />
          <Button type="primary" icon={<SaveOutlined />} onClick={handleEdit} />
        </Space.Compact>
      ) : (
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Checkbox
            checked={completed}
            onChange={() => dispatch(toggleTodo(id))}
            style={{ marginRight: 8 }}
          />
          <Typography.Text
            style={{
              flex: 1,
              marginRight: 8,
              textDecoration: completed ? "line-through" : "none",
              color: completed ? "rgba(0, 0, 0, 0.45)" : "inherit",
            }}
          >
            {text}
          </Typography.Text>
          <Space>
            <Button
              icon={<EditOutlined />}
              onClick={() => setIsEditing(true)}
            />
            <Button
              icon={<DeleteOutlined />}
              danger
              onClick={() => dispatch(deleteTodo(id))}
            />
          </Space>
        </div>
      )}
    </List.Item>
  );
};

export default TodoItem;