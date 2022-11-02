import axios from "axios";
import React, { useRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin-right: 5px;
  padding: 5px 8px;
  background-color: rgb(255, 247, 248);
  border: 0px;
  border-radius: 5px;
  color: #7a797a;

  &:focus {
    outline: 2px dashed #ffd3e7;
  }
`;

const StyledBtn = styled.button`
  color: #ffffff;
  background-color: #ffd3e7;
  border: 2px solid #ffd3e7;
  border-radius: 5px;
`;

const TodoAdd = ({ setIsAdd, getdata }) => {
  const [todo, setTodo] = React.useState("");
  const inputTodo = useRef();

  // const postData = async () => {
  //   try {
  //     const response = await axios.post(`http://sortielab.com:8200/todo`, { todoName: "todo" });
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const postData = async () => {
    await axios({
      method: "post",
      url: "http://sortielab.com:8200/todo",
      params: {
        todoName: `${todo}`,
      },
    });
    getdata();
  };

  const editTodo = (e) => {
    setTodo(e.target.value);
  };

  const btnClickHandler = () => {
    if (!todo) {
      inputTodo.current.focus();
      return;
    }
    // onCreateData(false, false, todo);
    postData();

    alert("success!");
    setTodo("");
    setIsAdd(false);
  };

  return (
    <div>
      <StyledInput ref={inputTodo} value={todo} onChange={editTodo} />
      <StyledBtn onClick={btnClickHandler}>OK</StyledBtn>
    </div>
  );
};
export default TodoAdd;
