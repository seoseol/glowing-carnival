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

const TodoAdd = ({ onCreateData, setIsAdd }) => {
  const [todo, setTodo] = React.useState("");
  const inputTodo = useRef();

  const editTodo = (e) => {
    setTodo(e.target.value);
  };

  const btnClickHandler = () => {
    if (!todo) {
      inputTodo.current.focus();
      return;
    }
    onCreateData(false, false, todo);
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
