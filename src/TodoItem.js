import TodoList from "./TodoList";

const TodoItem = ({ id, data }) => {
  console.log("TodoItem", { data });
  return (
    <div>
      <span>
        {id} {data}
      </span>
      <button>삭제</button>
      <button>북마크</button>
    </div>
  );
};

export default TodoItem;
