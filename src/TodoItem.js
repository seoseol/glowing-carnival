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
      <input type="checkbox" onClick={checkhandler}></input>
      {isEdit ? (
        <input onChange={editTodoName} value={editContent}></input>
      ) : (
        <span onClick={changeInput}>{dataItem.todoName} </span>
      )}
      {isEdit ? <button onClick={edithandler}>확인</button> : <button onClick={removehandler}>삭제</button>}
      <button onClick={bookmarkhandler}>{dataItem.marked ? "해제" : "북마크"}</button>
    </div>
  );
};

export default TodoItem;
