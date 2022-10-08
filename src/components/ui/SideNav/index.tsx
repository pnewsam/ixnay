import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: var(--bg-light);
  display: flex;
  flex-direction: column;
  grid-area: sidenav;
  height: 100vh;
  padding: var(--base);
`;

export const SideNav = () => {
  return (
    <Nav>
      <Link to="/">Overview</Link>
      <Link to="/typography">Typography</Link>
      <Link to="/button">Button</Link>
      <Link to="/dialog">Dialog</Link>
      <Link to="/icon">Icon</Link>
      <Link to="/input">Input</Link>
      <Link to="/list">List</Link>
    </Nav>
  );
};
