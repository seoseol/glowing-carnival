import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  margin-right: 2px;
  color: #ffffff;
  background-color: #ffd3e7;
  border: 2px solid #ffd3e7;
  border-radius: 5px;
`;

const TodoItem = ({ dataItem, dataList, setData }) => {
  const [editContent, setEditContent] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  console.log("dataList", dataList);

  const putTodoNameData = () => {
    axios({
      method: "put",
      url: "http://sortielab.com:8200/todo",
      params: {
        todoId: `${dataItem.todo_id}`,
        todoName: `${editContent}`,
      },
    });
  };

  const putBookmarkData = () => {
    axios({
      method: "put",
      url: "http://sortielab.com:8200/todo/bookmark/regist",
      params: {
        todoId: `${dataItem.todo_id}`,
      },
    });
  };

  const putNoBookmarkData = () => {
    axios({
      method: "put",
      url: "http://sortielab.com:8200/todo/bookmark/unregist",
      params: {
        todoId: `${dataItem.todo_id}`,
      },
    });
  };

  const putTodoData = () => {
    axios({
      method: "put",
      url: "http://sortielab.com:8200/todo/complete",
      params: {
        todoId: `${dataItem.todo_id}`,
      },
    });
  };

  const deleteData = () => {
    axios({
      method: "delete",
      url: "http://sortielab.com:8200/todo",
      params: {
        todoId: `${dataItem.todo_id}`,
      },
    });
  };

  const checkhandler = () => {
    if (dataItem.todo_status == "미완") {
      // setIsCheck(!isCheck);
      setData(
        dataList.map((item) => (item.todo_id == dataItem.todo_id - 2 ? { ...dataItem, todo_status: "완료" } : item))
      );
      putTodoData();
    } else {
      setIsCheck(!isCheck);
      setData(
        dataList.map((item) => (item.todo_id == dataItem.todo_id - 2 ? { ...dataItem, todo_status: "미완" } : item))
      );
      putTodoData();
    }
  };

  const edithandler = () => {
    setData(
      dataList.map((item) => (item.todo_id == dataItem.todo_id ? { ...dataItem, todo_name: editContent } : item))
    );
    putTodoNameData();
    setIsEdit(false);
  };

  const removehandler = () => {
    const newTodoList = dataList.filter((item) => item.todo_id != dataItem.todo_id);
    setData(newTodoList);
    deleteData();
  };

  const bookmarkhandler = () => {
    setData(dataList.map((item) => (item.todo_id == dataItem.todo_id ? { ...dataItem, bookmark_status: "Y" } : item)));
    putBookmarkData();
  };

  const noBookmarkhandler = () => {
    setData(dataList.map((item) => (item.todo_id == dataItem.todo_id ? { ...dataItem, bookmark_status: "N" } : item)));
    putNoBookmarkData();
  };

  const changeInput = () => {
    setEditContent(dataItem.todo_name);
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
        <span onClick={changeInput}>{dataItem.todo_name} </span>
      )}
      {/* <StyledBtn onClick={bookmarkhandler}>{dataItem.bookmark_status == "Y" ? "bookmark" : "cancel"}</StyledBtn> */}
      {dataItem.bookmark_status == "Y" ? (
        <StyledBtn onClick={noBookmarkhandler}>cancle</StyledBtn>
      ) : (
        <StyledBtn onClick={bookmarkhandler}>bookmark</StyledBtn>
      )}
      {isEdit ? <StyledBtn onClick={edithandler}>ok</StyledBtn> : <StyledBtn onClick={removehandler}>remove</StyledBtn>}
    </div>
  );
};

export default TodoItem;
