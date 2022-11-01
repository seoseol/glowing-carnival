import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Menu from "./Menu";
import TodoListMenu from "./MenuTodoList";
import BookmarkMenu from "./MenuBookmark";

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreateData = (checked, marked, todoName) => {
    const newItem = {
      checked,
      marked,
      todoName,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([...data, newItem]);
    // setData(...data, { checked: checked, marked: marked, todoName: todoName, id: dataId.current });
  };

  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/Todo" element={<TodoListMenu onCreateData={onCreateData} data={data} setData={setData} />} />
        <Route path="/Bookmark" element={<BookmarkMenu data={data} setData={setData} />} />
      </Routes>
    </div>
  );
}

export default App;
