import TodoItem from "./TodoItem";

const TodoBookmark = ({ data, setData }) => {
  return (
    <div>
      {data
        .filter((item) => item.bookmark_status == "Y")
        .map((item) => (
          <TodoItem dataItem={item} dataList={data} setData={setData} />
        ))}
    </div>
  );
};

export default TodoBookmark;
