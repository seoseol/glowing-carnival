import React from "react";
const TodoAdd = ({ onCreateData, setIsAdd }) => {
  const [todo, setTodo] = React.useState("");

  const editTodo = (e) => {
    setTodo(e.target.value);
  };

  const btnClickHandler = () => {
    onCreateData(false, false, todo);
    alert("success!");
    setTodo("");
    setIsAdd(false);
  };

  return (
    <div>
      <input value={todo} onChange={editTodo} />
      <button onClick={btnClickHandler}>OK</button>
    </div>
  );
};
export default TodoAdd;
