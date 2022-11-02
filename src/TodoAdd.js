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

const TodoAdd = ({ setIsAdd }) => {
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
  const postData = () => {
    axios({
      method: "post",
      url: "http://sortielab.com:8200/todo",
      params: {
        todoName: `${todo}`,
      },
    })
      .then((response) => {
        // if (response.data.result["code"] === "200") {
        //   setCompanyList(response.data.data);
        //   console.log(response.data.data);
        // } else if (response.data.result["code"] === "401") {
        //   alert("토큰이 만료되었습니다. 로그인 페이지로 이동합니다.");
        //   window.location.href = "/";
        // } else if (response.data.result["code"] === "402") {
        // } else {
        //   alert(response.data.result["message"]);
        // }
      })
      .catch(function (error) {});
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
