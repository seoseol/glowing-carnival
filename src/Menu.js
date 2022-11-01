import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <Link to="/todo">TODO LIST</Link>
      <span> </span>
      <Link to="bookmark">BOOKMARK</Link>
      <br />
    </div>
  );
};
export default Menu;
