import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  grid-area: sidenav;
  height: 100vh;
  overflow-y: scroll;
  padding: var(--content-padding) calc((var(--content-padding) / 2));
`;

export const SideNav = () => {
  return (
    <Nav>
      <h6>Overview</h6>
    </Nav>
  );
};
