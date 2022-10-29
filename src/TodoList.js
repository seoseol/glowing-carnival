import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data }) => {
  console.log("TodoList", data);

  const testData = data.map((it) => {
    return it;
  });
  console.log("testMap", testData);

  return (
    <div>
      <h2>todo 모아보기 </h2>

      <div>
        {data.map((it) => {
          <TodoItem {...it} />;
        })}
      </div>

      <TodoItem testData={testData} />
    </div>
  );
};

export default TodoList;
