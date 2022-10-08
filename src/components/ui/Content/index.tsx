import styled from "styled-components";

export const Content = styled.div`
  grid-area: content;
  /* width: 100%; */
  height: 100vh;
  overflow-y: scroll;
  /* max-width: 600px; */
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: var(--content-padding);
`;
