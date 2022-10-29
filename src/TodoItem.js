import TodoList from "./TodoList";

const TodoItem = ({ dataList }) => {
  console.log("TodoItem", { dataList });
  return (
    <div>
      <input type="checkbox"></input>
      <span>toooodoooo </span>
      <button>삭제</button>
      <button>북마크</button>
    </div>
  );
};

export default TodoItem;
