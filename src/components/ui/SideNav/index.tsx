import styled from "styled-components";
import { Link as link } from "react-router-dom";

export const Nav = styled.nav`
  border-right: solid 1px var(--grey-20);
  display: flex;
  flex-direction: column;
  grid-area: sidenav;
  height: 100vh;
  padding: var(--content-padding) calc((var(--content-padding) / 2));
`;

const Link = styled(link)`
  margin-bottom: var(--one-half);
`;

export const SideNav = () => {
  return (
    <Nav>
      <h6>Overview</h6>
      <Link to="/">Overview</Link>
      <Link to="/colors">Colors</Link>
      <Link to="/typography">Typography</Link>
      <Link to="/icons">Icons</Link>
      <Link to="/variables">Variables</Link>
      <Link to="/utility-classes">Utility Classes</Link>
      <h6>Components</h6>
      <Link to="/button">Button</Link>
      <Link to="/dialog">Dialog</Link>
      <Link to="/input">Input</Link>
      <Link to="/list">List</Link>
      <Link to="/table">Table</Link>
      <h6>Demo</h6>
      <Link to="/demo">Demo</Link>
    </Nav>
  );
};
