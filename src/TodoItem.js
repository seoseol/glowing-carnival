import React, { useState } from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  margin-right: 2px;
  color: #ffffff;
  background-color: #ffd3e7;
  border: 2px solid #ffd3e7;
  border-radius: 5px;
`;

const TodoItem = ({ dataItem, dataList, setData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState("");

  const checkhandler = () => {
    setData(dataList.map((item) => (item.id == dataItem.id ? { ...dataItem, checked: !dataItem.checked } : item)));
  };

  const edithandler = () => {
    setData(dataList.map((item) => (item.id == dataItem.id ? { ...dataItem, todoName: editContent } : item)));
    setIsEdit(false);
  };

  const removehandler = () => {
    const newTodoList = dataList.filter((item) => item.id != dataItem.id);
    setData(newTodoList);
  };

  const bookmarkhandler = () => {
    setData(dataList.map((item) => (item.id == dataItem.id ? { ...dataItem, marked: !dataItem.marked } : item)));
  };

  const changeInput = () => {
    setEditContent(dataItem.todoName);
    setIsEdit(true);
  };

  const editTodoName = (e) => {
    setEditContent(e.target.value);
  };

  return (
    <div>
      <input type="checkbox" onClick={checkhandler} />
      {isEdit ? (
        <input onChange={editTodoName} value={editContent}></input>
      ) : (
        <span onClick={changeInput}>{dataItem.todoName} </span>
      )}
      <StyledBtn onClick={bookmarkhandler}>{dataItem.marked ? "cancel" : "bookmark"}</StyledBtn>
      {isEdit ? <StyledBtn onClick={edithandler}>ok</StyledBtn> : <StyledBtn onClick={removehandler}>remove</StyledBtn>}
    </div>
  );
};

export default TodoItem;
