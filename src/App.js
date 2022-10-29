import { useState, useRef } from "react";
import AddTodo from "./AddTodo";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreateData = (checked, marked, todoName) => {
    const newItem = {
      checked,
      // f = 완료X t= 완료
      marked,
      todoName,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([...data, newItem]);
  };

  return (
    <div className="App">
      <AddTodo onCreateData={onCreateData} />
      <TodoList data={data} setData={setData} />
    </div>
  );
}

export default App;
