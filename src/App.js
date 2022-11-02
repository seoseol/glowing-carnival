import { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Menu from "./Menu";
import TodoListMenu from "./MenuTodoList";
import BookmarkMenu from "./MenuBookmark";
import axios from "axios";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const [data, setData] = useState([]);
  // const dataId = useRef(0);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const response = await axios.get("http://sortielab.com:8200/todo");
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // const onCreateData = (checked, marked, todoName) => {
  //   const newItem = {
  //     todo_id: dataId.current,
  //     todo_name: todoName,
  //     bookmark_status: marked,
  //     todo_status: checked,
  //   };
  //   dataId.current += 1;
  //   setData([...data, newItem]);
  //   // setData(...data, { checked: checked, marked: marked, todoName: todoName, id: dataId.current });
  // };

  return (
    <StyledContainer>
      <Menu />
      <Routes>
        <Route path="/" element={<TodoListMenu data={data} setData={setData} />} />
        <Route path="/Bookmark" element={<BookmarkMenu data={data} setData={setData} />} />
      </Routes>
    </StyledContainer>
  );
}

export default App;
