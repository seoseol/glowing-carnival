import { useState } from "react";

const AddTodo = ({ onCreateData }) => {
  const [todo, setTodo] = useState("");

  const editTodo = (e) => {
    setTodo(e.target.value);
  };

  const buttonClicked = () => {
    onCreateData(false, todo);
    alert("저장 성공!");
    setTodo("");
  };

  return (
    <div>
      <h2>오늘의 할 일!</h2>
      <div>
        <input value={todo} onChange={editTodo} />
      </div>
      <div>
        <button onClick={buttonClicked}> 입력 </button>
      </div>
    </div>
  );
};

export default AddTodo;
