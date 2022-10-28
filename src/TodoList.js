import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data }) => {
  console.log("TodoList", data);
  return (
    <div>
      <h2>todo 모아보기 </h2>
      <div>
        {data.map((it) => (
          //배열 내에 고유한 키값이 없을 때는 it, idx로 사용할 수 있음
          //하지만 배열의 순서가 변경되었을 때 문제가 생길 수 있음
          <TodoItem key={it.id} {...data} />
        ))}
        {/* <TodoItem data={data} /> */}
      </div>
    </div>
  );
};

export default TodoList;
