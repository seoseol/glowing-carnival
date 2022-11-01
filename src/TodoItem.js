import React, { useState } from "react";

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
      {isEdit ? <button onClick={edithandler}>ok</button> : <button onClick={removehandler}>remove</button>}
      <button onClick={bookmarkhandler}>{dataItem.marked ? "cancel" : "bookmark"}</button>
    </div>
  );
};

export default TodoItem;
