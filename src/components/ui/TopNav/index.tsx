import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  align-items: center;
  background-color: var(--white);
  border-bottom: solid 1px var(--grey-20);
  box-shadow: var(--shadow-2);
  display: flex;
  justify-content: center;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 10;
  gap: 16px;
`;

const Brand = styled.span`
  font-weight: bolder;
`;

export const TopNav = () => {
  return (
    <Nav>
      <Brand>Ixnay</Brand>
      <Link to="/#typography">Typography</Link>
    </Nav>
  );
};
