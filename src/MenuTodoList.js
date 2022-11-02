import React from "react";
import styled from "styled-components";

import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  padding-top: 4px;
`;

const StyledH = styled.h4`
  font-size: 20px;
  color: #ffd3e7;
`;

const StyledInContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;

const StyledP = styled.p`
  margin-right: 12px;
  font-weight: bold;
  color: #ffd3e7;
`;

const StyledTodoAdd = styled(TodoAdd)`
  text-align: center;
`;

const TodoListMenu = ({ onCreateData, data, setData, getdata }) => {
  const [isAdd, setIsAdd] = React.useState(false);

  const addHandler = () => {
    setIsAdd(!isAdd);
  };

  return (
    <StyledContainer>
      <StyledH>TODAY'S TO-DO</StyledH>
      <StyledInContainer>
        <StyledP onClick={addHandler}>ADD</StyledP>
        {isAdd ? <StyledTodoAdd onCreateData={onCreateData} setIsAdd={setIsAdd} getdata={getdata} /> : undefined}
      </StyledInContainer>
      <TodoList data={data} setData={setData} />
    </StyledContainer>
  );
};

export default TodoListMenu;
