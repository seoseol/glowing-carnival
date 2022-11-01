import React from "react";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const TodoListMenu = ({ onCreateData, data, setData }) => {
  const [isAdd, setIsAdd] = React.useState(false);

  const addHandler = () => {
    setIsAdd(!isAdd);
  };

  return (
    <div>
      <h4>TODAY'S TO-DO</h4>
      <div>
        <h4 onClick={addHandler}>ADD</h4>
        {isAdd ? <TodoAdd onCreateData={onCreateData} setIsAdd={setIsAdd} /> : undefined}
      </div>
      <TodoList data={data} setData={setData} />
    </div>
  );
};

export default TodoListMenu;
