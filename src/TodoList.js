import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data, setData }) => {
  React.useEffect(() => {
    console.log("todoList", data);
  }, [data]);

  return (
    <div>
      <div>
        <h2>todo 모아보기 </h2>
        {data
          .filter((item) => !item.marked)
          .map((item) => (
            <TodoItem dataItem={item} dataList={data} setData={setData} />
          ))}
      </div>
      <div>
        <h2>bookmark todo 모아보기</h2>
        {data
          .filter((item) => item.marked)
          .map((item) => (
            <TodoItem dataItem={item} dataList={data} setData={setData} />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
