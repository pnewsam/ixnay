import { useState } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid var(--grey-20);
  margin-bottom: 16px;
  padding: 32px;
  width: 100%;
`;

const Top = styled.div`
  /* grid-template-areas: "output html"; */
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr;
`;

const Collapsible = styled.div``;

type Props = {
  children: React.ReactNode;
  css?: string;
};

export const SplitPane = ({ children, css = "" }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Wrapper>
      <Top>{children}</Top>
      {css && <Collapsible>{css}</Collapsible>}
    </Wrapper>
  );
};
