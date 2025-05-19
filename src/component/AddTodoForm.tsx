import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../service/todosSlice";
import { Input, Button, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddTodoForm: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Space.Compact style={{ width: "100%", marginBottom: 16 }}>
        <Input
          placeholder="Добавить задачу..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
          Добавить
        </Button>
      </Space.Compact>
    </form>
  );
};

export default AddTodoForm;
