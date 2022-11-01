import TodoItem from "./TodoItem";

const TodoBookmark = ({ data, setData }) => {
  return (
    <div>
      <div>
        {data
          .filter((item) => item.marked)
          .map((item) => (
            <TodoItem dataItem={item} dataList={data} setData={setData} />
          ))}
      </div>
    </div>
  );
};

export default TodoBookmark;
