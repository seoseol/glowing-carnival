import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data, setData }) => {
  React.useEffect(() => {
    console.log("todoList", data);
  }, [data]);

  return (
    <div>
      <h2>todo 모아보기 </h2>

      <div>
        {data.map((item) => (
          <TodoItem dataItem={item} dataList={data} setData={setData} />
        ))}
      </div>

      {/* <TodoItem testData={testData} />/ */}
    </div>
  );
};

export default TodoList;
