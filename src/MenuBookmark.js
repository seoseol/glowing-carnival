import styled from "styled-components";
import TodoBookmark from "./TodoBookmark";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  padding-top: 4px;
`;

const StyledH = styled.h4`
  font-size: 20px;
  color: #ffd3e7;
`;
const BookmarkMenu = ({ data, setData }) => {
  return (
    <StyledContainer>
      <StyledH>BOOKMARK TO-DO</StyledH>
      <TodoBookmark data={data} setData={setData} />
    </StyledContainer>
  );
};

export default BookmarkMenu;
