import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 26px;
  background-color: #ffecf4;
`;

const StyledLink = styled(Link)`
  padding: 5px 20px;
  text-align: center;
  font-size: 20px;
  color: #353233;
  text-decoration: none;
  &:hover {
    color: #ffffff;
    background-color: #ffe0ee;
  }
`;

const Menu = () => {
  return (
    <StyledContainer>
      <StyledLink to="/">TODO LIST</StyledLink>
      <StyledLink to="bookmark">BOOKMARK</StyledLink>
    </StyledContainer>
  );
};
export default Menu;
