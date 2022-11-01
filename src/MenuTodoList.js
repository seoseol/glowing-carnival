import React from "react";
import TodoList from "./TodoList";

const TodoListMenu = ({ onCreateData, data, setData }) => {
  const [todo, setTodo] = React.useState("");

  const editTodo = (e) => {
    setTodo(e.target.value);
  };

  const btnClickHandler = () => {
    onCreateData(false, false, todo);
    alert("success!");
    setTodo("");
  };

  return (
    <div>
      <h4>TODAY'S TO-DO</h4>
      <div>
        <h4>ADD</h4>
        <input value={todo} onChange={editTodo} />
        <button onClick={btnClickHandler}>OK</button>
      </div>
      <TodoList data={data} setData={setData} />
    </div>
  );
};

export default TodoListMenu;
