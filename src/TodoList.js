import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data, setData }) => {
  return (
    <div>
      <h5>todo</h5>
      {data
        .filter((item) => !item.marked)
        .map((item) => (
          <TodoItem dataItem={item} dataList={data} setData={setData} />
        ))}
    </div>
  );
};

export default TodoList;
