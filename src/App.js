import { useState, useRef } from "react";
import AddTodo from "./AddTodo";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreateData = (todoName) => {
    const newItem = {
      todoName,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <AddTodo onCreateData={onCreateData} />
      <TodoList data={data} />
    </div>
  );
}

export default App;
