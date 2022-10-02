import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: var(--bg-light);
  display: flex;
  flex-direction: column;
  grid-area: sidenav;
  height: 100vh;
  left: 0;
  padding: var(--base);
  box-sizing: border-box;
  position: fixed;
  width: 200px;
`;

export const SideNav = () => {
  return (
    <Nav>
      <Link to="/">To Do</Link>
      <Link to="/text">Text</Link>
      <Link to="/form">Form</Link>
    </Nav>
  );
};
