import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 3px;
`;

const StyledInput = styled.input`
  width: 250px;
  margin: 0px 4px;
  font-size: 16px;
  background-color: rgb(255, 247, 248);
  border: 2px dashed #ffd3e7;
  border-radius: 5px;
  color: #7a797a;
`;

const StyledSpan = styled.span`
  margin: 0px 4px;
  font-size: 16px;
  color: #353233;
  color: ${(props) => props.isCheck && "#c9c4c6"};
  text-decoration: ${(props) => props.isCheck && "line-through"};
`;

const StyledCheckSpan = styled.span`
  margin: 0px 4px;
  font-size: 16px;
  text-decoration: line-through;
  color: #c9c4c6;
`;

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

  const checkhandler = (e) => {
    if (e.target.checked) {
      console.log("?");
      setIsCheck(true);
      setData(dataList.map((item) => (item.todo_id == dataItem.todo_id ? { ...dataItem, todo_status: "완료" } : item)));
    } else {
      console.log("!");
      setIsCheck(false);
      setData(dataList.map((item) => (item.todo_id == dataItem.todo_id ? { ...dataItem, todo_status: "미완" } : item)));
    }
    putTodoData();
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
    <StyledDiv>
      <input
        type="checkbox"
        onClick={checkhandler}
        checked={dataItem.todo_status == "완료" ? "checked" : ""}
        readOnly
      />
      {/* checked={dataItem.todo_status == "완료" ? testCheck : testCheck} */}
      {isEdit ? (
        <StyledInput onChange={editTodoName} value={editContent} />
      ) : (
        <StyledSpan onClick={changeInput} isCheck={dataItem.todo_status == "완료" ? "isCheck" : ""}>
          {dataItem.todo_name}
        </StyledSpan>
      )}

      {/* <StyledBtn onClick={bookmarkhandler}>{dataItem.bookmark_status == "Y" ? "bookmark" : "cancel"}</StyledBtn> */}
      {dataItem.bookmark_status == "Y" ? (
        <StyledBtn onClick={noBookmarkhandler}>cancle</StyledBtn>
      ) : (
        <StyledBtn onClick={bookmarkhandler}>bookmark</StyledBtn>
      )}
      {isEdit ? <StyledBtn onClick={edithandler}>ok</StyledBtn> : <StyledBtn onClick={removehandler}>remove</StyledBtn>}
    </StyledDiv>
  );
};

export default TodoItem;
