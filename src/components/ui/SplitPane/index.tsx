import React, { useState } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid var(--grey-20);
  border-radius: var(--radius-2);
  margin-bottom: 16px;
  width: 100%;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "title title" "rendered code";
`;

const Top = styled.div`
  align-items: center;
  background-color: var(--grey-10);
  border-bottom: solid 1px var(--grey-20);
  display: flex;
  grid-area: title;
  justify-content: space-between;
  padding: 1rem;
`;

const Left = styled.div`
  grid-area: rendered;
  padding: 1rem 1rem 2rem 2rem;
`;

const Right = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  grid-area: code;
  padding: 1rem 2rem 2rem 1rem;
`;

const Code = styled.code<{ isCollapsed: boolean }>`
  margin: 0;
  overflow: hidden;
  padding: 0.5rem 1rem;
  width: 100%;
  /* height: 0;
  transition: height 0.5s ease-out;
  ${({ isCollapsed }) =>
    !isCollapsed && "height: fit-content; padding: 0.5rem 1rem;"}; */
`;

type Props = {
  children: React.ReactNode;
  code: React.ReactNode;
  codeString?: string;
  els?: string[];
};

export const SplitPane = ({ children, code, codeString, els = [] }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <Wrapper>
      <Top>
        <p>
          {els.map((el, idx) => (
            <React.Fragment key={idx}>
              <code>{el}</code>
              {idx !== els.length - 1 ? " " : ""}
            </React.Fragment>
          ))}
        </p>
        <button
          className="secondary"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          Show Code
        </button>
      </Top>
      <Left>{children}</Left>
      <Right className="nix">
        {!isCollapsed && <Code isCollapsed={isCollapsed}>{code}</Code>}
      </Right>
    </Wrapper>
  );
};
