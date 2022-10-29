import React from "react";

const TodoItem = ({ dataItem, dataList, setData }) => {
  const checkhandler = () => {
    setData(dataList.map((item) => (item.id == dataItem.id ? { ...dataItem, checked: !dataItem.checked } : item)));
  };
  return (
    <div>
      <input type="checkbox" onClick={checkhandler}></input>
      <span>{dataItem.todoName} </span>
      <button>삭제</button>
      <button>북마크</button>
    </div>
  );
};

export default TodoItem;
