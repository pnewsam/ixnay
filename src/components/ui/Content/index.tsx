import styled from "styled-components";

export const Content = styled.div`
  grid-area: content;
  height: 100vh;
  margin: 0 auto;
  max-width: var(--content-max-width);
  overflow-y: scroll;
  padding: var(--content-padding);
  width: var(--content-full-width);
`;
