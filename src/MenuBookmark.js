import TodoBookmark from "./TodoBookmark";

const BookmarkMenu = ({ data, setData }) => {
  return (
    <div>
      <h4>BOOKMARK MENU</h4>
      <TodoBookmark data={data} setData={setData} />
    </div>
  );
};

export default BookmarkMenu;
