import styled from "styled-components";
import { Link as link } from "react-router-dom";

export const Nav = styled.nav`
  border-right: solid 1px var(--grey-20);
  display: flex;
  flex-direction: column;
  grid-area: sidenav;
  height: 100vh;
  overflow-y: scroll;
  padding: var(--content-padding) calc((var(--content-padding) / 2));
`;

const Link = styled(link)`
  /* margin-bottom: var(--one-half); */
`;

const InlineFlexRow = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 8px;
  margin-bottom: var(--one-quarter);
`;

export const SideNav = () => {
  return (
    <Nav>
      <h6>Overview</h6>
      <InlineFlexRow>
        <Link to="/">Overview</Link>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/colors">Colors</Link>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/typography">Typography</Link>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/icons">Icons</Link>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/variables">Variables</Link>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/utility-classes">Utility Classes</Link>
      </InlineFlexRow>
      <h6>Components</h6>

      <InlineFlexRow>
        <Link to="/avatar">Avatar</Link>{" "}
        <i-badge variant="info">Custom</i-badge>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/badge">Badge</Link>
        <i-badge variant="info">Custom</i-badge>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/button">Button</Link>
        <i-badge variant="success">Hybrid</i-badge>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/checkbox">Checkbox</Link>
        <i-badge variant="info">Custom</i-badge>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/combobox">Combobox</Link>
        <i-badge variant="info">Custom</i-badge>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/dialog">Dialog</Link>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/input">Input</Link>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/list">List</Link>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/radio">Radio</Link>
        <i-badge variant="info">Custom</i-badge>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/select">Select</Link>
        <i-badge variant="info">Custom</i-badge>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/skeleton">Skeleton</Link>
        <i-badge variant="info">Custom</i-badge>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/spinner">Spinner</Link>
        <i-badge variant="info">Custom</i-badge>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/table">Table</Link>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/tag">Tag</Link>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/toggle">Toggle</Link>
        <i-badge variant="info">Custom</i-badge>
      </InlineFlexRow>
      <InlineFlexRow>
        <Link to="/tooltip">Tooltip</Link>
        <i-badge variant="info">Custom</i-badge>
      </InlineFlexRow>

      <h6>Demo</h6>
      <Link to="/demo">Demo</Link>
    </Nav>
  );
};
