import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Radio } from "antd";
import { setFilter, FilterStatus } from "../service/todosSlice";
import { RootState } from "../service/store";

const TodoFilter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.todos.filter);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Radio.Group
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value={FilterStatus.All}>Все</Radio.Button>
        <Radio.Button value={FilterStatus.Active}>Активные</Radio.Button>
        <Radio.Button value={FilterStatus.Completed}>Завершенные</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default TodoFilter;
