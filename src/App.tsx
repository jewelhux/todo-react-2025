import React from "react";
import { Provider } from "react-redux";
import { store } from "./service/store";
import TodoList from "./component/TodoList";
import { ConfigProvider } from "antd";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <div style={{ padding: "24px" }}>
          <TodoList />
        </div>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
